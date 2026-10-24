# DLsite 50% OFF 券音声作品资料库

对应活动编号：`20261016coupon50`。范围沿用用户提供的原始筛选链接：同人、音声/ASMR、乙女/TL，以及链接中的语言条件。不同 RJ 编号的日文版、中文版分别保留。

## 本次导出

2026-10-24（北京时间）完成全部 23 页，共 2,217 条唯一 RJ 记录；SQLite、JSON 和浏览器数据文件均已生成，未解决的采集错误为 0。

- 2,217 个本地缩略图文件，其中 2,214 个是真实 BK，3 个为明确标记的占位图。
- 3 张占位图中，1 部作品官方未提供封面，另 2 部作品的官方大图及备用缩略图均返回 404。
- 5 张真实 BK 使用官方备用缩略图，保留实际尺寸。
- 662 部作品的官方详情页未标注声优，保留为空并标记；其余作品保存官方声优姓名，多人分别入库。

实时文件状态以 `data/status.json` 为准。

## 文件用途

| 路径 | 用途 |
| --- | --- |
| `data/catalog.sqlite` | 本地 SQLite 数据库，便于后续整理、查询和更新 |
| `data/works.json` | 通用 UTF-8 数据，供脚本或静态网站读取 |
| `data/works.js` | 与 JSON 同步生成的浏览器数据，赋值给 `window.DLSITE_CATALOG` |
| `data/status.json` | 采集时间、预期总数、已采数量、完整状态和具体失败记录 |
| `images/RJ号.webp` | 本地 BK 缩略图，宽度最多 320px，按原比例缩小，不裁切、不拉伸 |
| `raw/lists/` | 官方列表分页快照，支持断点继续与来源追溯 |
| `raw/details/` | 补全声优与中文信息时保存的官方详情页 |
| `raw/products/` | 补全中文版本时保存的官方作品接口响应 |
| `raw/covers/` | 官方 BK 图片来源缓存，便于重新生成缩略图 |
| `catalog.py` | 采集与导出脚本 |
| `language.py` | 补全官方中文版本、中文台本、中文字幕状态，并同步导出 |
| `index.html`、`app.js`、`style.css` | 本地静态检索页 |

## 本地静态检索页

双击本文件夹的`index.html`即可检索作品名、声优、RJ号、社团。页面每页48条，加载同目录`data/works.js`，读取`window.DLSITE_CATALOG.works`。保留`app.js`、`style.css`、`data/works.js`和`images/`即可本地使用；官方作品链接联网打开。

每张卡片按官方资料分别显示“中文版本”“中文台本”“中文字幕”的状态。没有明确说明的显示“未标注”。三个状态分别保存，中文台本和中文版本不会被当作中文字幕。

这适合双击本地 HTML 的方式：不需要通过 `fetch()` 读取本地 JSON，也不需要浏览器加载 SQLite 或额外的数据库运行库。SQLite 留作资料整理与更新的数据底稿；JSON / JS 由同一次导出生成，后续修改数据后统一重新导出。

图片使用每条记录的 `bk.path`，可设置约 300px 的显示宽度，保留原比例。示例参考图约 313×233；常见 4:3 封面生成 320×240 缩略图。异形封面保留自身比例。

少数官方大图地址返回 404 时，改用该官方列表明确提供的备用缩略图，保留实际尺寸，不放大。`bk.fallback_used` 标记这一情况，`bk.source_url` 保存实际下载来源；数量见 `metadata.fallback_thumbnail_count`。

如果官方大图与列表提供的全部备用图均返回 404，则保存官方占位图，`bk.is_placeholder` 为 `true`，`bk.unavailable_source_url` 保留失效的大图地址，`bk.placeholder_reason` 记录具体原因；数量见 `metadata.unavailable_cover_count`。网络握手或超时失败继续作为失败项重试，不按“官方无封面”处理。

检索建议覆盖作品名、RJ 号、社团名、全部声优名；加载后在浏览器内过滤这些字段即可。图片按需加载即可，不需要一次显示全部封面。

检索页沿用相邻3本999活动的展示规格。

以后发布静态页面时，只需带上页面文件、`data/works.js` 和 `images/`。SQLite、采集脚本与 `raw/` 缓存可以留在本地，无需随页面发布。

## 记录结构

每条作品包含以下字段：

- `rj`：唯一 RJ 编号，字符串保留前导零。
- `title`：官方作品名，保存原文。
- `voice_actors`：声优名字数组，多人作品分别保存。
- `voices_complete`：是否已完成官方声优字段的读取或确认未标注。
- `voices_source`：`listing` 为列表完整字段，`detail` 为官方详情页补全，`detail_not_listed` 为官方详情页未标注声优，`listing_truncated` 为尚待核对。
- `circle`：社团 `id`、`name`、`url`。
- `url`：DLsite 作品链接。
- `bk`：官方来源 `source_url`、本地相对路径 `path`、实际 `width`、`height`，以及官方无封面的标记 `is_placeholder`。
- `source_page`、`source_url`、`fetched_at`：来源分页及读取时间。
- `language`：中文信息，包括`is_chinese_version`（`true`、`false`、`null`）、`edition_label`、`chinese_script`、`chinese_subtitles`（后两者为`yes`、`no`、`unknown`），以及`evidence`官方说明片段与链接、`codes`语言代码、`checked_at`读取时间、`detail_checked`详情核对状态。

中文版本优先使用当前RJ对应的官方版本标签，再使用官方标题及语言代码；台本和字幕按当前作品官方介绍的明确标注记录。与3本999活动重复的RJ直接复用已核对资料，其他作品读取官方作品接口及详情。补全口径复用`../matome20261023voice/language.py`，本脚本需要保留这个相邻文件。

`metadata.language_checked_count`记录已核对条数，`language_complete`表示全部作品完成中文资料核对，`language_errors`保留具体读取失败。

`metadata.complete` 为 `true` 才表示列表数量、全部缩略图及声优字段均已完成。官方无封面的作品保存官方占位图，单独标记 `is_placeholder`，数量见 `metadata.placeholder_count`。具体进度以 `data/status.json` 为准。时间字段使用带时区的 UTC ISO 8601 格式。

官方详情页未标注声优时，`voice_actors` 保存空数组，`voices_source` 为 `detail_not_listed`；数量见 `metadata.unlisted_voice_count`。这与网络失败或尚未补全分开记录，后续页面可显示“官方未标注”。

优惠券资格记录的是采集时该官方活动列表的收录情况。今后更新同一期活动前请保留现有快照；脚本默认复用缓存，不会自动清空旧快照。

## SQLite 表

- `works`：每个 RJ 一行，保存名称、社团、链接、图片路径、来源与声优完整状态。
- `work_voices`：每位声优一行，以 `(rj, position)` 保留官方顺序；`name` 有索引。
- `metadata`：活动信息与采集状态，各值为 JSON。
- `work_languages`：每个RJ的中文版本、中文台本、中文字幕状态及官方依据，与JSON中的`language`同步。

## 采集命令

环境要求：Python 3、`lxml`、`Pillow`，以及系统 `curl.exe`。脚本读取系统已有代理，不更改系统设置，不需要账号或密钥。

在 `D:\repo` 下，使用已带这些依赖的 Python 运行：

```powershell
& 'C:\Users\shuiy\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' dlsite/dlsite-coupon-20261016/catalog.py --stage lists
& 'C:\Users\shuiy\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' dlsite/dlsite-coupon-20261016/catalog.py --stage assets
& 'C:\Users\shuiy\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' dlsite/dlsite-coupon-20261016/language.py
```

`lists` 采集列表；`assets` 补全声优、下载 BK 并生成缩略图；`all` 顺序完成两者；`export` 仅从已保存的数据重新生成导出文件。每页列表以及每 40 条图片处理结果都会保存进度；失败后可重新运行对应阶段继续。

网络握手失败较多时，可在命令末尾加 `--workers 4` 降低并发。图片任务默认最多 16 个，官方详情页请求最多 8 个。
