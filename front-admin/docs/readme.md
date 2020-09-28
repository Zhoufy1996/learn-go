<!-- @format -->

## 1. webpack

### 1.1. html

#### 1.1.1. plugin

1. html-webpack-plugin [github](https://github.com/jantimon/html-webpack-plugin#configuration)

### 1.2. css

#### 1.2.1. loader

1. mini-css-extract-plugin.loader: 将 css 提取为独立的文件，对每个包含 css 的 js 文件都会创建一个 CSS 文件。
2. @teamsupercell/typings-for-css-modules-loader: 将 css 字符串模块化，即添加 hash/后缀之类的。
3. css-loader: 解释@import 和 url()，然后将 css 转化为 commonjs
4. sass-loader: 将 scss 编译成 css。

#### 1.2.2. plugin

1. mini-css-extract-plugin:要将 css 提取为独立的文件，因此需要有命名规则之类的。

#### 1.2.3. 其他

1. node-sass

### 1.3. typescript

#### 1.3.1. typescript

#### 1.3.2. babel

1. babel-loader
2. @babel-core

##### 1.3.2.1 presets

1. @babel/preset-typescript:typescript => javascript
2. @babel/preset-react: jsx => javascript

##### 1.3.2.2 plugins

1.  react-hot-loader/babel:react 局部热更新

### 1.4. file

### 1.5 其他

1. webpack
2. webpack-cli
3. webpack-merge

### 1.101. do

#### 1.101.1. html

1. html 文件的各个配置：title, favicon,filename 等
2. 代码压缩

#### 1.101.2. css

1. css/scss 模块化/非模块化的区分
2. 代码压缩
3. 将 CSS 提取为独立的文件
4. 开发环境热更新

#### 1.101.3. typescript

### 1.102. question

### 1.103. todo

1. 运行期间 title/favicon 修改
2. 外部 css 长缓存
3. 外部 js 长缓存
4. dll
5. 多页面应用

## 2. 库

### 2.1. 前端框架

1. react
2. @types/react
3. react-dom
4. @types/react-dom
5. @hot-loader/react-dom:与 react-hot-loader 配合[react-hot-loader](https://github.com/gaearon/react-hot-loader)

### 2.2. ui 组件库

#### 2.2.1. material ui

1. @material-ui/core
2. @material-ui/icons

### 2.3 状态管理库

1. recoil
2. @types/recoil

### 2.4. HTTP 库

1. axios

### 2.5. 路由

1. react-router-dom
2. @types/react-router-dom

### 2.101. do

### 2.102. question

### 2.103. todo

1. learn
2. document

## 3. 代码规范

### 3.1. eslint

1. eslint:
2. @typescript-eslint/parser: 替换成 ts 解析器
3. eslint-config-airbnb:airbnb 规则
4. eslint-plugin-typescript: typescript 的规则
5. eslint-plugin-import: es6 import export 拼写检查
6. eslint-plugin-jsx-a11y: jsx 检查
7. eslint-loader: webpack 配置
8. eslint-plugin-react: react 检查
9. eslint-config-airbnb-base: 基础检查
10. eslint-import-resolver-typescript: 解决 interface 无法被识别的问题
11. eslint-plugin-react-hooks: hooks lint 插件

### 3.2. prettier

1. prettier
2. eslint-plugin-prettier: 将 prettier 作为 eslint 的规则
3. eslint-config-prettier: 解决冲突，以 prettier 为准

### 3.101. do

### 3.102. question

#### 3.102.1. interface no-unused-vars

[issue](https://github.com/typescript-eslint/typescript-eslint/issues/363)
[issue](https://github.com/AlloyTeam/eslint-config-alloy/issues/57)

### 3.103. todo

## 4. 开发体验

### 4.1 dev.server

1. webpack-dev-middleware
2. express
3. webpack-hot-middleware

### 4.101. do

### 4.102. question

### 4.103. todo

## 5. 测试

### 5.1 框架

1. jest
2. ts-jest
3. @types/jest

### 5.101. do

### 5.102. question

### 5.103. todo

## 6. 打包优化

1. webpack-bundle-analyzer

### 6.101. do

### 6.102. question

### 6.103. todo

### 101. packages

### 102. learning

#### 102.1. react

#### 102.2. typescript

#### 102.3. recoil

#### 102.4. axios

#### 102.5 react-router

#### 102.6. jest

#### 102.7. scss
