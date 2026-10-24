# 乙女向音声 · 3本999日元活动资料库

活动编号：`matome20261023voice`。按用户原始活动链接收录：TL（乙女向）、排除 AI 生成作品，不额外限制语言；不同 RJ 的语言版本分别保存。

## 打开检索页

双击 `index.html`。保留同目录的 `app.js`、`style.css`、`data/works.js` 和 `images/`，即可离线检索作品名、声优、RJ号、社团；官方作品及社团链接需要联网打开。页面每页展示48条，可翻页或选择页码。搜索词以空格分隔时同时匹配。

卡片按官方信息分别显示“中文版本”“中文台本”“中文字幕”的状态。未明确标注的显示“未标注”。

语言信息存入每条作品的`language`字段和SQLite的`work_languages`表。`is_chinese_version`为`true`、`false`或`null`；`chinese_script`及`chinese_subtitles`为`yes`、`no`、`unknown`。版本只取当前RJ对应的官方版本标签、标题及语言代码；台本、字幕只取官方作品介绍中的明确标注。`evidence`保存官方说明片段及链接。`metadata.language_complete`与`language_errors`记录补全状态。

`language.py`复用本活动与相邻优惠券活动已有的详情页，补查缺少的官方资料后同步导出；可直接重跑以续采，`--reparse`可按缓存重新读取全部标注。

封面按原比例缩小，宽度最多320px，不裁切、不拉伸；页面桌面封面宽度约300px，随可用空间适配。原图不可用时尝试同一作品列表中的官方缩略图；实际来源写入`bk.source_url`，原地址保留为`bk.original_source_url`。

## 存储结构

沿用上一级优惠券活动的格式，独立保存本活动的数据。

| 路径 | 用途 |
| --- | --- |
| `data/catalog.sqlite` | SQLite资料库：`works`、`work_voices`、`metadata`，另含本活动的`work_languages`语言标注表 |
| `data/works.json` | UTF-8完整数据：`metadata`及`works` |
| `data/works.js` | 同步导出的浏览器数据，赋值给`window.DLSITE_CATALOG`，支持本地直接打开HTML |
| `data/status.json` | 官方总数、入库数、缩略图数、声优完整数、失败原因及完成状态 |
| `images/RJ号.webp` | 本地BK缩略图 |
| `raw/lists/page-*.json` | 官方活动分页接口快照，含列表HTML与分页元数据 |
| `raw/products/RJ号.json` | 官方作品接口快照，用于补全声优 |
| `raw/details/RJ号.html` | 补查声优与中文信息的官方详情页 |
| `raw/covers/` | 原始封面缓存 |
| `collection*.log` | 首次采集、继续采集与缺项重试日志；最终状态以`data/status.json`为准 |
| `catalog.py` | 可断点继续的采集脚本，复用相邻优惠券活动`catalog.py`的存储与缩略图函数 |
| `language.py` | 官方中文版本、中文台本及中文字幕标注脚本 |

作品字段与原活动一致：`rj`、`title`、`voice_actors`、`voices_complete`、`voices_source`、`circle`、`url`、`bk`及来源分页、读取时间。声优优先从官方作品API读取，`voices_source`为`product_api`，JSON另存`voices_source_url`；API未列名时补查详情页，来源为`detail`。官方详情仍未列名时保留空数组，来源为`detail_not_listed`，页面显示“官方未标注”，不猜测姓名。

`metadata.complete`为`true`表示官方列表数量与去重结果一致、全部分页已保存、每条作品均已生成本地BK并读取官方声优字段。实际状态见`data/status.json`。时间记录为UTC带时区ISO字符串，检索页以北京时间显示。

## 数据来源

- 活动：<https://www.dlsite.com/girls/campaign/bulkbuy/=/key/matome20261023voice/?site_group%5B0%5D=girls&ai%5B0%5D=AIG>
- 分页：`https://www.dlsite.com/girls/campaign/bulkbuy/ajax/=/key/matome20261023voice/`，保留上述筛选参数，使用`per_page=50&page=N`。
- 作品：`https://www.dlsite.com/girls/api/=/product.json?workno=RJ号`。

默认复用本活动缓存、保留官方快照，记录的是采集时活动收录情况。采集过程若遇数量变化、跨页重复或网络失败，会保存进度与具体错误。

## 继续采集与重新导出

依赖：Python 3、lxml、Pillow、系统curl.exe，以及相邻`../dlsite-coupon-20261016/catalog.py`。从`D:\repo`运行：

```powershell
& 'C:\Users\shuiy\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' dlsite/matome20261023voice/catalog.py --stage all
& 'C:\Users\shuiy\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' dlsite/matome20261023voice/language.py
```

阶段可选：`lists`仅列表、`assets`补声优及图片、`export`仅重新导出、`all`全部。复跑会跳过已完成的列表页与资料，每40条保存一次资产处理进度。

本活动的文件与旧优惠券活动独立；采集与页面生成不修改上一级活动的数据文件。
