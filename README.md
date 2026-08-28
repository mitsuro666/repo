# 乙音记录模板

单页乙女记录卡模板工具：无需安装、打开即用，支持记录卡制作、修图、贴纸与 DLsite 作品信息导入；填写内容仅保存在浏览器本地。

## 在线使用地址

https://mitsuro666.github.io/repo/

## 主要功能

- 完整版 / 简略版记录卡模板
- 多套预设色卡样式
- 内置贴纸与图片编辑工具（模糊、马赛克、橡皮擦、贴纸等）
- 通过 RJ 号导入 DLsite 作品信息
- 数据本地保存，支持导入 / 导出备份

## 使用方式

直接打开 `index.html` 即可使用（支持本地打开与 GitHub Pages 访问）。填写内容会自动保存在当前浏览器本地；建议定期使用「导出数据」备份记录。

## 数据与隐私说明

用户填写的卡片内容与上传的图片仅在当前浏览器本地处理与保存（localStorage），不会上传至作者服务器。清除浏览器数据或更换设备可能导致内容丢失，请及时导出备份。

使用 RJ 号导入时，作品信息会经作者部署的 Cloudflare Worker 转发请求 DLsite 公开商品信息接口；Worker 仅转发，不存储导入内容。

## 版权与使用许可

本项目未采用开放源代码许可证。源码仅供查看，未经许可不得复制、修改、再发布或用于商业用途。详见 [LICENSE.md](LICENSE.md)。

## 第三方素材与字体来源

- 显示字体：BlackSugarPlumCandy（SIL OFL 1.1），完整许可证见 [font/OFL.txt](font/OFL.txt)。
- 内置贴纸：Microsoft Fluent Emoji（MIT License，Copyright Microsoft Corporation），完整许可证见 [licenses/fluentui-emoji-MIT.txt](licenses/fluentui-emoji-MIT.txt)。
- 完整素材清单与声明见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
- 配色说明：【占位】部分配色参考公开色彩资料，由作者重新选色、组合与命名，详细说明待补充。

## 非官方声明

本工具为个人开发的非官方粉丝工具，与 DLsite 及其运营方无隶属关系；DLsite 为 EISYS Inc. 的商标。

## 免责声明

本工具仅提供本地排版与图片生成服务，不授予用户对第三方素材的额外使用权。用户发布记录图时应遵守原权利人规定及各平台规则。

## 问题反馈

如有问题，欢迎在 GitHub 仓库提交 Issue。
