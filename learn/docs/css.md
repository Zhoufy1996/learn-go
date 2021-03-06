<!-- @format -->

### 1. 基础

#### 1.1. css 入门

##### 1.1.1. 样式化 html

##### 1.1.2. 改变元素的默认行为

##### 1.1.3. 使用类名

##### 1.1.4. 根据元素在文档中的位置确定样式

##### 1.1.5. 根据状态确定样式

##### 1.1.6. 将选择子和关系选择器组合起来

#### 1.2. 如何构建 css

##### 1.2.1. 应用 css

1. 外部样式表
2. 内部样式表
3. 内联样式

##### 1.2.2. 选择器

1. 专一性

##### 1.2.3. 属性和值

##### 1.2.4. 函数

1. calc
2. rotate

#### 1.3. css 是如何工作的

1. 载入 html
2. html 解析成 DOM 树
3. 拉取相关资源
4. 解析 css，生成 render 树,
5. 网页展示

##### 1.3.1. 遇到无法解析的 css 代码会发生什么

忽略，继续解析下一个 css 样式。可以利用这一特性做降级处理

### 2. CSS 构建

#### 2.1. 层叠与继承

##### 2.1.1. 冲突规则

1. 层叠
2. 优先级
3. 继承

##### 2.1.2. 理解继承

1. 哪些属性属于默认继承很大程度上是由常识决定的。color/font
2. 控制继承

```
1. inherit: 子元素属性和父元素相同
2. initial: 元素属性与浏览器默认样式相同。若浏览器未设置该属性的默认样式:
    2.1. 该属性默认继承: inherit
    2.2. 否则为空
3. unset
    3.1. 该属性默认继承：inherit
    3.2. 否则: initial
```

3. 重置所有属性

```
all: unset
```

##### 2.1.3. 理解层叠

1. 资源顺序
2. 优先级

```
1. 千位: 内联
2. 百位: id选择器
3. 十位: class选择器/属性选择器/伪类
4. 个位: 元素/伪元素

注: 通用选择器 (*)，组合符 (+, >, ~, ' ')，和否定伪类 (:not) 不会影响优先级。
不允许进位
```

3. important

4. 总结

```
1. 用户样式表!important
2. 作者样式表!important
3. 作者样式表
4. 用户样式表
5. 用户代理样式表(浏览器默认样式)
```

#### 2.2. 选择器

##### 2.2.1. 选择器的种类

1. 类型/类/id 选择器
2. 标签属性选择器
3. 伪类/伪元素选择器
4. 运算符

##### 2.2.2. 类型/类/id 选择器

1. 类型选择器
2. 全局选择器

```
*
article *:first-child
```

3. 类选择器
4. id 选择器
5. &, |

```
&: h1.article
|: h1, article
```

##### 2.2.3. 属性选择器

1. [attr]：有 attr 属性
2. [attr=value]：attr 属性等于 value
3. [attr~=value]：attr 属性包含 value
4. [attr|=value]：attr 属性等于 value or `/^value(-?)(.*)/`
5. [attr^=value]：`/^value(.*)/`
6. [attr$=value]：`/(.*)value$/`
7. [attr*=value]：`/value/`

8. 大小写敏感

##### 2.2.4. 伪类/伪元素

###### 2.2.4.1. 伪类

特定状态

1. 用户行为伪类

```
1. hover
2. focus
```

2. 选中子元素

```
1. first-child
2. only-child
3. invalid
```

###### 2.2.4.2. 伪元素

1. first-line
2. before
3. after

```
content: text
```

##### 2.2.5. 关系选择器

1. 后代选择器`a div`
2. 子代关系选择器`a > div`
3. 邻接兄弟`a + div`
4. 通用兄弟`a ~ div`

#### 2.3. 盒模型

##### 2.3.1. 块级盒子和内联盒子

1. 块级盒子
2. 内联盒子

```
垂直方向的内边距/外边距和边框会被应用，但不会把其他处于inline状态的盒子推开
```

##### 2.3.2. 内部和外部显示类型

1. flex
2. grid

##### 2.3.3. 什么是 CSS 盒模型

1. content
2. padding
3. border
4. margin
5. box-sizing

##### 2.3.4. 外边距，内边距，边框

##### 2.3.5. 盒子模型和内联盒子

##### 2.3.6. 使用 display: inline-block

#### 2.4. 背景与边框

1. background-color
2. background-image
3. background-repeat
4. background-size
5. background-position
6. background-attachment

##### 2.4.1. 渐变背景

##### 2.4.2. 多个图像背景

##### 2.4.3. 背景附加

##### 2.4.4. 边框/圆角

#### 2.5. 处理不同方向的文本

#### 2.6. 溢出的内容

1. overflow
2. BFC

#### 2.7. css 的值与单位

1. 长度
2. 百分比
3. 数字
4. 颜色
5. 图片
6. 位置
7. 字符串和标识符
8. 函数

#### 2.8. 在 CSS 中调整大小

##### 2.8.1. 原始尺寸 or 固有尺寸

##### 2.8.2. 设置具体的尺寸

##### 2.8.3. min- or max- 尺寸

响应式图片技术

##### 2.8.4. 视口单位

#### 2.9. 图像/媒体和表单元素

##### 2.9.1. 替换元素

1. 调整图像大小
2. 布局中的替换元素

##### 2.9.2. form 元素

#### 2.10. 格式化表格

#### 2.11. 调试

1. F12
2. 比较 DOM 和 View Source

#### 2.12. 组织 CSS

1. 代码风格规范
2. 保持统一
3. 格式化
4. 注释
5. 设置默认样式
6. 避免太特定的选择器
7. 分模块

### 3. 布局

#### 3.1. flex

#### 3.2. grid

#### 3.3. position

#### 3.4. float
