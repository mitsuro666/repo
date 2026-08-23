# 乙抓记录｜架构速览

本文只描述当前实现。项目是无构建步骤的单页应用，运行时全部位于一个浏览器页面内；预览使用 DOM/CSS，图片导出使用 Canvas。

## 目录职责

| 路径 | 职责 |
| --- | --- |
| `index.html` | 静态页面结构、弹窗和工具页容器；加载样式与主脚本。 |
| `css/style.css` | 全站样式、卡片模板、主题变量、响应式和移动端滚动/编辑布局。CSS 内相对资源路径以 `css/` 为基准。 |
| `js/app.js` | 单一 IIFE；状态、模板、分页、图片编辑、导入导出、IndexedDB、收藏库及初始化都在此。 |
| `font/` | 卡片预览和 Canvas 导出共用的展示字体。 |
| `stamp/` | 内置贴纸 PNG 源文件。 |
| `stamp-data/` | 内置贴纸的 base64 后备数据，用于本地文件环境和安全 Canvas 绘制。 |
| `tool-icons/` | 图片编辑工具图标。 |
| `dlsite-worker.js` | Cloudflare Worker；代理 DLsite 商品接口并处理 CORS。 |
| `check-load.js` | Node DOM stub；检查 `js/app.js` 的加载期错误。 |
| `generate_stamp_data.py` | 重新生成 `stamp-data/`。 |
| `demo/` | 设计/集成参考，不参与运行时。 |

## 运行时边界与核心 state

没有单一的全局 state 对象。实时状态由 DOM 字段和 `js/app.js` 内模块级变量共同组成：

- `currentThemeId`；当前模板由卡片根节点 class 经 `currentTemplate()` 推导。
- `continuationState = { full, compact }`，两者均为 `{ current, pages }`。
- 价格与播放器状态：手动折扣、总时长、进度、播放状态。
- 主卡与独立图片工具各自的原图、编辑结果、三类蒙版、历史、操作记录、贴纸和贴纸源。
- 临时图片编辑器状态：当前 mode、源图、画布组、撤销/重做、指针状态和模板状态备份。
- `grid9CellEditors`（9）、`quickCellEditors`（12）、`trioCellEditors`（3）及其当前活动格索引。

`collectState()` 是 DOM/变量到可持久化快照的统一边界；`applyState()` 是反向水合边界。快照主要包含：

- `template`、`theme`、文字/日期/评分/标签/价格/播放器字段；
- 主卡和独立图片工具的完整图片编辑状态；
- `grid9`、`quick`、`trio` 单元数据；
- `continuationPages.full`、`continuationPages.compact`。

不要把某个中间对象视为独立真源；输入、模板 DOM、模块变量与编辑器状态最终都必须通过这两个边界同步。

## 模板系统

| 模板 ID | 结构 | 预览基准 | 导出路径 |
| --- | --- | --- | --- |
| `full` | 首页 + 文字续页 | 1080 × 1440 | `renderFullHomeCanvas()` / `renderFullContinuationCanvas()` |
| `compact` | 首页 + 文字续页 | 600 × 800 | 对应 Canvas 按 1.8 倍输出为 1080 × 1440 |
| `grid9` | 9 格单页 | 1080 × 1440 | 当前实际调用 `downloadGrid9CardLegacy()` → `drawGrid9Card()` |
| `quick` | 12 格单页 | 1080 × 1440 | `drawQuickCard()` |
| `trio` | 3 格单页 | 1080 × 1440 | `measureTrioExportLayout()` → `drawTrioCard()` |

`setTemplate()` 负责根 class、按钮状态、移动端焦点、分页、舞台缩放和保存。`full`/`compact` 共用首页主字段和主封面；续页只保存评论正文，并显示共用的标题、CV、RJ 等信息。三种格子模板由启动阶段动态建立 DOM，各自拥有读取、写入、限制、导入、封面适配和导出逻辑。

预览主题来自 CSS 的语义 `--card-*` 变量；Canvas 颜色来自 `CARD_THEMES` 与 `currentCardTheme()`。两套渲染必须保持同一语义，但仍是两个独立实现。

## 存储结构

### 应用状态 IndexedDB

- 数据库：`otome-record-card-state-v1`，版本 `3`。
- stores：`state`、`settings`、`editor-projects`；当前记录 key 均为 `current`。
- 存储 schema：`2`。
- `settings`：模板、主题、画笔大小、播放器状态。
- `editor-projects`：主卡和独立图片工具的图片编辑字段。
- `state`：其余表单、模板单元和分页草稿。

`splitStoredState()` 拆分 `collectState()`，`mergeStoredState()` 合并三份记录。`saveState()` 在恢复完成前禁用，之后通过串行队列写入；`scheduleSave()` 使用 80 ms 防抖。恢复顺序为 IndexedDB → 旧 `localStorage` → 旧 compact 续页快照，成功后会清理旧记录。

轻量 UI 偏好仍保存在 `localStorage`：活动菜单、主页页签，以及状态存储模式标记。`otome-record-card-v1` 和 compact 续页键只用于旧数据迁移。

### 图片 IndexedDB

- 数据库：`otome-record-card-images-v1`，版本 `3`。
- `images`：Blob，key 格式 `idb-image-v1:<uuid>`。
- `image-meta`：创建时间、内容 hash，以及远程封面重建所需的 URL/workno/尺寸/格式信息。

状态写入前，`serializeStateImageReferences()` 递归遍历整份 state，把 data URL 存成 Blob 引用；恢复时 `hydrateStateImageReferences()` 反向解析为运行时 data URL。SHA-256、引用/data URL 映射和 in-flight Promise 用于去重和并发合并。

图片 GC 同时扫描应用状态和收藏库中的引用；普通图片保留 24 小时宽限期，可重建的远程缓存可优先删除。收藏列表和详情使用短生命周期 Blob Object URL，离开可见集合后立即撤销。

### 收藏库 IndexedDB

- 数据库：`otome-record-card-collection`，版本 `2`。
- store：`works`，`keyPath: "id"`。
- 自定义标签、移除标签和最近详情 id 仍在各自的 `localStorage` 键中。

收藏库与卡片草稿是独立数据域，但共用图片数据库，因此图片清理必须同时计算两侧引用。

## 主要数据流

```text
输入 / DLsite 导入
  → DOM 字段与模块变量
  → 模板 DOM 预览
  → collectState()
  → 递归图片引用序列化
  → state/settings/editor-projects + images/image-meta

IndexedDB / 旧数据
  → 合并与迁移
  → 图片引用水合
  → applyState()
  → 模板 DOM、分页、编辑器变量

当前 DOM/变量
  → 模板专用 Canvas 绘制
  → Blob
  → PC 下载或移动端导出预览
```

## 图片生命周期与编辑模块

1. 本地文件或 DLsite 图片经 FileReader/fetch 进入 data URL，并先本地化为可安全绘制的图像。
2. 主封面最长边压到 1200；有透明通道时保留 PNG，否则 JPEG 质量 `.85`。格子模板封面最长边 480，白底 JPEG 质量 `.85`。
3. DOM 和编辑器运行期使用 data URL；持久化时转为图片库引用。
4. 编辑器维护原图、马赛克效果、模糊效果、马赛克/模糊/白雾蒙版、共享合成画布和显示画布。
5. 编辑历史以 operation-history v1 为主，同时兼容旧快照格式。应用编辑后，格子模板和收藏详情保存扁平化 PNG；主卡和独立工具保留蒙版、历史和贴纸，支持继续编辑。
6. 导出前按实际使用情况加载贴纸；外部图和贴纸必须完成本地化，避免 Canvas 污染。

编辑器 mode 为 `template`、`standalone`、`collection-detail`、`grid9`、`quick`、`trio`。非主模板进入编辑器时，先把主模板编辑全局保存到 `templateEditorGlobalsBackup`，再把目标单元映射到共享编辑器；关闭时写回目标并恢复备份。活动格索引是写回目标的一部分。

`openImageEditorSafely()` 串行化打开过程并在失败时回滚/显示具体错误。关闭后 `releaseImageEditorTransientResources()` 释放临时画布和撤销对象；持久状态不能随临时资源一同清除。

## 分页

- 仅 `full` 和 `compact` 分页；`current === 0` 表示首页。
- 续页正文位于 `pages[current - 1]`，总页数为 `pages.length + 1`。
- 新增页向 `pages` 尾部 push 空字符串；删除只允许续页，并在二次确认后 splice。
- compact 续页使用 `contenteditable`，由 MutationObserver 和显式 commit 同步；切页、失焦、粘贴、保存和页面退出前必须先提交当前内容。
- full 续页使用普通输入控件。续页没有独立图片身份。

## JSON 边界

项目 JSON：

```json
{ "app": "otome-record-card", "version": 1, "exportedAt": "...", "data": {} }
```

导入兼容上述 wrapper 和旧的裸 state。流程为解析 → `applyState(data, false)` → `saveState()`。项目 JSON 来自已水合的运行时 state，图片保持内联 data URL；不得暴露内部 IndexedDB 图片引用或改变公开版本语义。

收藏备份格式为 `{ "type": "otome-record-card-works", "version": 3, "exportedAt": "...", "works": [], "customTags": [], "removedTags": [] }`，导入兼容旧数组及版本 1/2/3；导出时同样把图片引用解析为 data URL。

## Canvas 导出

`downloadCard()` 提交播放器当前时间后按模板分派。分页模板逐页顺序绘制并在转成 Blob 后释放 Canvas；PC 使用临时 Object URL 直接下载，移动端进入多页预览弹层并在切换/关闭时撤销 URL。所有路径先等待字体和图像解码，异常通过站内弹窗显示具体原因，按钮在 `finally` 中恢复。

`trio` 的 Canvas 布局优先从未缩放的离屏 DOM 测量，失败才使用旧坐标。`grid9` 中仍存在 DOM 快照实验函数，但当前导出链未调用，真实路径仍是手绘 Canvas。

## 移动端图片与长文本数据流

- 页面根节点保持有界且禁止根滚动；`.app` 是 `100dvh` 内部滚动容器。`fitStage()` 同时缩放卡片并写入缩放后的舞台布局高度。
- 图片编辑弹层在模板上下文与独立工具页之间重挂载；工具栏和操作区由对应的 place 函数切换容器。绘图仍复用同一套画布、操作历史和写回适配器。
- 独立图片工具在移动端把解码源图最长边限制为 1800，降低内存峰值。
- full 首页长评使用专用焦点编辑层：输入实时回写源字段和预览，尺寸跟随 `visualViewport`，全卡预览时保存并恢复选择区和滚动位置。现有续页仍直接编辑，不经过该层。
- 触控绘制、擦除、白雾和贴纸操作统一走 Pointer Events；活动 pointer 集合处理多指/捏合保护。移动端没有独立的导出渲染器。

## 关键计算模块

- 文本：`Intl.Segmenter` 字素切分及 fallback、全角单位限制、Canvas 测量换行/行数、输入法 composition 保护；限制器按模板分别实现。
- 价格/播放器：数字清洗、折扣推导与手动覆盖、时间解析/格式化、进度换算。
- DLsite：RJ 规范化、超时请求、代理返回解析、标签/安全关键词映射、中文版识别；格子批量导入并发数为 2。
- 主题：DOM 使用 CSS 语义变量；Canvas 使用 `themeAlpha()`、`themeTint()`、`themeGradient()` 等 palette 派生函数。
- 收藏：把当前卡片快照规范化为 work；优先使用 RJ 作为 id，否则使用稳定的 `ID########`/sourceSlot 规则。

## 初始化流程

1. IIFE 获取静态 DOM，绑定静态事件与输入法保护，建立对话框、画布和内存缓存。
2. 初始化播放器、菜单/主页占位状态；动态执行 `buildGrid9Cells()`、`buildQuickCells()`、`buildTrioCells()`。
3. 提前恢复活动菜单和主页页签，执行 picker/舞台布局，避免异步恢复前出现空白。
4. 异步等待字体（失败使用 fallback）→ `restoreState()` → 请求持久存储 → 迁移格子封面压缩格式 → 恢复主页并更新布局/价格。
5. `beforeunload`、`pagehide`、页面隐藏时提交 compact 续页；resize 时更新页布局、舞台、主题分页器和编辑器操作区。
6. 收藏模块在核心启动代码后的独立 IIFE 中初始化：打开收藏数据库、加载 works、渲染列表，并按保存的详情 id 恢复详情。

## 模块依赖

- 模板输入依赖 DOM/模块变量；持久化只通过 `collectState()` / `applyState()` 穿越边界。
- 状态库依赖图片库完成引用转换；收藏库独立于状态库，但复用图片库、商品解析和当前卡片提取逻辑。
- DOM 预览依赖模板 CSS；Canvas 导出依赖同一运行时值、`CARD_THEMES`、字体和图像工具。
- 共享图片编辑器通过 mode 适配器连接主卡、独立工具、收藏详情和三种格子模板。
- DLsite 相关请求依赖 `dlsite-worker.js` 代理；普通草稿和图片不会由该 Worker 同步。

## 修改时的高风险点

- `js/app.js` 是单 IIFE，顶层声明顺序有加载期依赖；常量和 `let`/`const` 必须先声明后使用。结构调整后运行 `node check-load.js`。
- 预览和导出是双渲染器。模板几何、颜色、换行或图层变化必须逐元素映射到 DOM/CSS 与 Canvas；不要用 DOM 截图替换 Canvas。
- 不要把大型 data URL 直接长期写入状态 stores；必须保留递归图片引用层。图片 GC 必须统计状态库和收藏库。
- 分页首页下标与续页数组相差 1；compact 切页前漏 commit 会丢失当前页文字。
- 编辑器 mode、主模板备份和活动格索引共同决定写回位置；任一错位都会覆盖另一张封面。
- 外部图/贴纸未经本地化会污染 Canvas，导致导出失败。字体未就绪会改变 Canvas 文字测量。
- compact 预览尺寸不是最终导出尺寸；导出固定放大到 1080 × 1440。
- trio 离屏 DOM 测量是当前导出组成部分；grid9 DOM 快照代码不是当前真实导出路径。
- 不要恢复移动端根页面滚动，也不要在视觉视口变化时移动根页面或模板。长评沿用焦点编辑层，现有续页是明确例外。
- 数据库版本、store、公开 JSON v1、收藏备份兼容和旧编辑历史格式均有迁移责任，不能只改当前写入格式。
- JavaScript 中文 UI 字符串、HTML 固定文本和正则标点必须遵守 `ENCODING_NOTES.md`，避免再次引入编码损坏。
