# 中文变问号问题备忘

## 现象

在修改 `index.html` 时，页面里的中文文案有时会被写成 `????`，例如：

- 按钮文案从「编辑图片」变成 `????`
- 弹窗标题、工具按钮变成 `??` / `???`
- 正则里的特殊字符也可能被写坏，例如负号匹配变成 `[-??]`

这类问题通常不是浏览器渲染问题，也不是字体问题，而是文件写入链路里的编码问题。

## 原因

当前项目在 Windows / PowerShell / Node 脚本之间反复编辑文件。某些命令链路在处理内联中文字符串时，会把脚本文本按非 UTF-8 编码传递或解释，导致中文在写入文件前已经丢失，最后落到文件里的就是问号。

高风险场景：

- 在 PowerShell here-string 里直接写中文，再交给 `node` 写入文件
- 用脚本批量替换包含中文的 HTML 片段
- 在命令行参数里直接携带中文
- 正则或字符串里直接放 Unicode 标点，如 `–` / `—`

一旦中文在命令执行前被替换成 `?`，后续再用 UTF-8 保存也救不回来。

## 最稳解决办法

### 1. HTML 可见中文优先用实体

如果是 HTML 里的固定文案，优先写成 HTML entity：

```html
<button>&#32534;&#36753;&#22270;&#29255;</button>
```

浏览器显示为：

```text
编辑图片
```

这样命令链路里只包含 ASCII，不会被编码吃掉。

### 2. JavaScript 中文常量优先用 `String.fromCharCode`

项目里已经大量使用这种方式：

```js
const LABEL_TITLE = String.fromCharCode(0x6807, 0x9898);
```

显示为：

```text
标题
```

优点是整个源码片段仍然是 ASCII，Windows 命令链路更安全。

### 3. 正则里的特殊 Unicode 字符用转义

不要直接写：

```js
/^[-–—]+/
```

推荐写：

```js
/^[-\u2013\u2014]+/
```

这样不会被写成：

```js
/^[-??]+/
```

### 4. 避免用脚本直接替换中文片段

不推荐：

```js
s = s.replace("安全模糊", "编辑图片");
```

推荐替换结构或 id，再用 HTML entity / charCode 放文案：

```js
s = s.replace(
  /id="blurButton"[\s\S]*?<\/button>/,
  'id="imageEditButton" type="button">&#32534;&#36753;&#22270;&#29255;</button>'
);
```

## 每次改完都检查

运行下面的检查，确认没有异常问号：

```powershell
Select-String -Path index.html -Pattern '\?\?\?' -Context 0,2
```

如果要更严格，可以检查 `??`，但注意 JavaScript 里合法的空值合并运算符也是 `??`：

```powershell
Select-String -Path index.html -Pattern '\?\?' -Context 0,2
```

看到这些是正常的：

```js
state.ratings?.[index] ?? 4
target.selectionStart ?? target.value.length
```

看到这些是不正常的：

```html
<button>????</button>
```

```js
/^[-??]+/
```

## 推荐修复流程

1. 先定位：

```powershell
Select-String -Path index.html -Pattern '\?\?' -Context 0,2
```

2. 判断是不是合法 JS `??`。

3. 如果是坏掉的中文文案：

- HTML 固定文案改成 HTML entity
- JS 常量改成 `String.fromCharCode`

4. 如果是坏掉的 Unicode 标点：

- 改成 `\uXXXX` 转义

5. 最后跑脚本语法检查：

```powershell
@'
const fs = require('fs');
const s = fs.readFileSync('index.html', 'utf8');
const m = s.match(/<script>([\s\S]*)<\/script>/);
if (!m) throw new Error('script not found');
new Function(m[1]);
console.log('script ok');
'@ | node
```

## 一句话原则

以后通过命令行脚本改 `index.html` 时，新增中文尽量不要直接写中文字符串。HTML 用 entity，JavaScript 用 `String.fromCharCode`，正则特殊字符用 `\uXXXX`。
