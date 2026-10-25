# 音声活动交集检索页

双击本目录的 `index.html` 打开。页面接入两份本地活动资料库的 RJ 交集，保留真实作品标题、BK、声优、社团与官方链接。

2026-10-25 通过当前系统代理补采地区可见作品：3本999名单 1,270 部，50%券名单 2,302 部，交集 901 部（增加31部）。原有870部的中文状态继续沿用交集页已核对的记录。

## 已确认的页面规格

- 使用“黄昏塞纳”色卡：暮橘 `#E3BEA0`、霞粉 `#E0C0C4`、河蓝灰 `#B6C6D2`、楼影紫 `#B6AEC6`、余晖白 `#F1E9DE`。
- PC 四列，搜索框与声优、社团、排序、清空合为一行，每页 20 部。
- 移动端双列，每页 16 部，删除两个活动入口按钮；首屏按四排、八张紧凑卡片组织，其余向下滚动查看。较矮的屏幕、放大字体或展开筛选会增加滚动量。
- 卡片显示真实 BK、标题、声优、社团及 RJ；标题打开官方作品页，社团名打开官方社团页，均使用新标签页。
- 多关键词同时匹配；声优及社团支持搜索和多选，同类满足任一，不同类同时满足。
- 支持默认顺序、标题、社团、RJ 排序，以及分页与空结果重置。筛选、页码及滚动位置保存在当前浏览器会话中。
- 为满足紧凑布局，长标题与移动端过长的声优、社团采用视觉省略；完整数据保留在页面文本、悬停提示及数据文件内，作品标题链接可直接打开完整官方信息。
- 双端以“查看购物车”替换数据说明，BK 左上角黄色按钮加入作品；购物车按 RJ 去重并保存到本机浏览器 localStorage。
- 购物车“全部加入收藏”按 RJ 去重保存全部购物车作品，保留购物车内容；主页顶部“打开收藏”展示同款横条作品列表，不计算金额。收藏独立保存在 localStorage，移出及清空均需确认。
- 当前页面会复用最近 96 张作品卡片及 96 个购物车条目中的图片节点。列表前 8 张封面、购物车前 6 张封面立即加载，后续封面懒加载；相同列表不重复重建。页面重新打开后仍使用浏览器原有 HTTP 图片缓存。
- 作品数量旁“显示设置”可分别隐藏列表 BK 上的 RJ 号和加入购物车按钮，偏好保存在本机浏览器。顶部查看购物车和弹窗内信息不受影响。
- 购物车横条列表显示 BK、标题链接、声优和社团。移出作品前使用站内弹窗确认；列表滚动时底部金额区保持可见。
- 购物车底部右侧“加入已买”一次记录购物车内全部作品，按 RJ 保存在 localStorage 中，成功后清空购物车并关闭弹窗。默认列表隐藏已购买作品；点击“已购买”筛选后只显示已购买作品，可叠加其余筛选。卡片及购物车列表显示已购买标签。
- 合计按作品数 × 167 日元计算。打开购物车时获取 Frankfurter 最新日元兑人民币参考汇率，显示汇率日期；15 分钟内复用已获取的汇率。获取失败时显示具体原因及重试按钮。

## 数据与文件

`build_data.py` 按 RJ 号取两份现有 JSON 的交集，保留第一份活动名单的原始顺序，生成 `data/works.json` 和可本地直接加载的 `data/works.js`。不联网、不改变来源文件。

`data/works.json` 保留完整交集记录及 `source_records` 中的两份原始记录。网页加载的 `data/works.js` 由 `web_assets.py` 精简导出，只保留标题、RJ、声优、社团、链接、BK路径及尺寸、三个中文状态；原始记录和证据不随网页加载。BK 复用相邻资料库的本地图片。

`font/BlackSugarPlumCandy-web.woff2` 只包含页面及当前作品列表需要的字体字符；`font/webfont.css` 使用互不重叠的 `unicode-range`，其他字符按需使用主项目 `font/black-sugar-plum-candy.woff2`。原始 TTF 继续保留。网页数据或界面文案更新后运行 `web_assets.py`，重新生成网页数据及字体。

保持以下相对位置即可使用：

```text
matome-coupon/
  intersection/                  # index.html / style.css / app.js / data/
  matome20261023voice/images/
  dlsite-coupon-20261016/images/
```

没有第三方 CDN、联网字体或浏览器数据库运行库；查询和购物车保存均在本地完成。打开官方链接、获取汇率需要联网；汇率接口为 https://api.frankfurter.dev/v2/rate/jpy/cny ，数据按日更新。

更新两份源数据后，在 `D:\repo` 运行：

```powershell
& 'C:\Users\shuiy\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' matome-coupon/intersection/build_data.py
& 'C:\Users\shuiy\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' matome-coupon/intersection/web_assets.py
```

字体生成依赖 fonttools 4.67.0 和 brotli 1.2.1，本地安装在已忽略的 `.build-tools/` 中，不属于网页运行依赖。重新配置时使用上述 Python 的 `-m pip install --target matome-coupon/intersection/.build-tools fonttools==4.67.0 brotli==1.2.1`。

实现依据为本聊天中确认的新版 PC、移动端概念图。按项目协作规则，仅进行基本语法及静态检查，实际浏览效果由用户确认。

地区补采工具为上级目录 `refresh_jp.py`。先执行 `--stage lists` 获取独立列表快照并计算RJ差集，再执行 `--stage enrich` 补取缺漏资料，最后执行 `--stage apply` 合并。工具使用系统代理，原始快照和备份存放在来源库已忽略的 `raw/jp-refresh-20261025/` 中；合并时保留已有作品和字段。之后运行本目录的 `build_data.py`、`web_assets.py` 更新交集及精简网页资源。
