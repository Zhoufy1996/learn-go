<!-- @format -->

### 1. install

1. npm install @material-ui/core
2. npm install @material-ui/icons

### 2. component

### 3. style

### 4. customization

#### 4.1. theming 主题

##### 4.1.1. ThemeProvider

##### 4.1.2. 主题配置变量

1. palette
2. typography
3. spacing
4. breakpoints
5. z-index
6. globals

##### 4.1.3. 自定义变量

##### 4.1.4. 访问一个组件中的主题

##### 4.1.5. 嵌套主题

### 5. 指南

#### 5.1 API 设计方法

##### 5.1.1. 封装

1. 使用 children
2. 有限子组件封装
3. API 的一致性

#### 5.1.2. 规则

1. 扩展：如果使用未明确说明的属性，属性会扩展到根元素
2. 原生属性：避免记录 DOM 支持的那些原生属性，如 className
3. css classes

4. 嵌套的组件
5. 属性名称
6. 受控的组件
7. boolean vs enum
8. ref

#### 5.2. typescript

##### 5.2.1. withStyles

在 TypeScript 中使用 withStyles 可能有点棘手，但有一些工具集可以使体验尽可能地轻松。

##### 5.2.2 使用 createStyles 来杜绝类型扩展

1. 是否依赖于主题
2. 媒体查询

### 6. premium themes

### 7. 发现更多
