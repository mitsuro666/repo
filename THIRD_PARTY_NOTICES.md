# Third-Party Notices

本项目包含的第三方字体、素材与服务说明。

## 字体

### BlackSugarPlumCandy

- 项目作者：LXGW（落霞孤鹜）等
- 来源：https://github.com/lxgw/BlackSugarPlumCandy
- 许可证：SIL Open Font License 1.1
- 修改情况：未修改

完整许可证文本见 [font/OFL.txt](font/OFL.txt)。该字体包含以下版权方的贡献：LXGW（2019–2026）、Adobe（2014–2025，Reserved Font Name "Source"）、M+ FONTS PROJECT、BM JUA Project Authors。

## 工具图标

### 橡皮擦图标（tool-icons/eraser1.png、eraser2.png）

- 来源：AI 生成、参考网络素材
- 说明：使用范围以本项目 [LICENSE.md](LICENSE.md) 为准

## 内置贴纸

### Microsoft Fluent Emoji（stamp/）

- 来源：https://github.com/microsoft/fluentui-emoji
- 许可证：MIT License（Copyright Microsoft Corporation）
- 修改情况：未修改
- 完整许可证文本见 [licenses/fluentui-emoji-MIT.txt](licenses/fluentui-emoji-MIT.txt)
- 说明：贴纸素材版权归原作者或权利人所有，本项目不授予额外使用权

## 配色参考

- 甜桃榛果：@建筑生存手册
- 薄荷气泡：@店铺设计小张
- 杏桃舒芙：@桃吱
- 抹茶莓酪、樱花星冰、脏脏莓咖：@桃芝芝
- 午后宝石、月光碎片、玻璃微光、溶于茜色、群青沉眠、深红静谧、潮风调音：08lux_design
- 柳岸春风、竹影清风、梦境彩虹、樱落桃酥、莓语轻紫、果香青苹：@ejui慢慢来

## 服务与商标

### DLsite 商品信息接口

- 说明：本工具请求 DLsite 公开商品信息接口，并在受跨域限制时通过 Cloudflare Worker（`dlsite-rj-import.shuiyingsheng.workers.dev`）转发，仅用于按 RJ 号导入公开作品信息
- 商标：DLsite 为 EISYS Inc. 的商标，本项目为非官方工具，与 DLsite 无隶属关系

### dlwatcher 公开价格记录

- 说明：本工具通过 Cloudflare Worker 请求 dlwatcher 的公开商品价格记录，仅用于补充作品的史低折扣信息

### Cloudflare Worker

- 说明：Worker 应用代码不会将 RJ 号、作品信息或导入结果写入本站数据库；Cloudflare、DLsite 和 dlwatcher 仍可能依照各自规则处理必要的网络请求信息

## AI 辅助说明

- 本项目部分代码在 AI 编程工具辅助下完成
