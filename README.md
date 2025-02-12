# Babel Plugin: Transform Regexp Empty Negative Class

[![npm version](https://img.shields.io/npm/v/babel-plugin-transform-regexp-empty-negative-class.svg)](https://www.npmjs.com/package/babel-plugin-transform-regexp-empty-negative-class)
[![Build Status](https://github.com/linsk1998/babel-plugin-transform-regexp-empty-negative-class/workflows/CI/badge.svg)](https://github.com/linsk1998/babel-plugin-transform-regexp-empty-negative-class/actions)
[![License](https://img.shields.io/npm/l/babel-plugin-transform-regexp-empty-negative-class.svg)](https://github.com/linsk1998/babel-plugin-transform-regexp-empty-negative-class/blob/main/LICENSE)

## 描述

`babel-plugin-transform-regexp-empty-negative-class` 是一个 Babel 插件，用于将正则表达式中的空否定字符集（`[^]`）转换为 `[\w\W]`。这种转换可以提高代码的兼容性，避免在某些旧版浏览器或环境中出现兼容性问题。

## 安装

通过 npm 安装插件：

```bash
npm install --save-dev babel-plugin-transform-regexp-empty-negative-class
```

## 使用方法

在你的 Babel 配置文件（如 .babelrc 或 babel.config.js）中添加插件：

```json
{
  "plugins": ["babel-plugin-transform-regexp-empty-negative-class"]
}
```

或者在 babel.config.js 中：

```javascript
module.exports = {
  plugins: ['babel-plugin-transform-regexp-empty-negative-class'],
};
```

## 示例

### 输入代码
```javaScript
const regex = /[^]/g;
```

### 输出代码
```javaScript
const regex = /[\w\W]/g;
```

## 贡献

欢迎贡献！如果你发现任何问题或有改进建议，请提交 [issue](href="https://github.com/linsk1998/babel-plugin-transform-regexp-empty-negative-class/issues") 或 [pull request](href="https://github.com/linsk1998/babel-plugin-transform-regexp-empty-negative-class/pulls")。