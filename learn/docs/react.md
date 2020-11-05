[中文文档](https://react.docschina.org/docs/getting-started.html)
## 1.44

## 1. 核心概念

#### 1.1. JSX 简介

预备知识: html、javascript

#### 1.1.1. 为什么使用 JSX

#### 1.1.2. 在 JSX 中嵌入表达式

#### 1.1.3. JSX 也是一个表达式

在编译之后，JSX 表达式会被转为普通 JavaScript 函数调用，并且对其取值后得到 JavaScript 对象。

#### 1.1.4. JSX 特定属性

1. property
2. attribute

#### 1.1.5. JSX 防注入攻击

比如: 取 input.value, input.value 为`<script>123</script>`,执行,会被 xss 攻击

#### 1.1.6. JSX 表示对象

### 1.2. 元素渲染

#### 1.2.1. 将一个元素渲染为 DOM

#### 1.2.2. 更新已渲染的元素

#### 1.2.3. React 只更新它需要更新的部分

### 1.3. 组件&props

1. ui = f(props)

#### 1.3.1. 函数组件与 class 组件

#### 1.3.2. 渲染组件

1. 组件名开头必须大写

#### 1.3.3. 组合组件

#### 1.3.4. 提取组件

1. 命名：组件自身的角度，不要依赖上下文
2. UI 中有一部分被多次使用 or 组件本身足够复杂

#### 1.3.5. Props 的只读性

1. 纯函数，无副作用

### 1.4. state&生命周期

#### 1.4.1. 将函数组件转换成 class 组件

#### 1.4.2. 向 class 组件中添加局部的 state

1. 函数组件 useState

#### 1.4.3. 将生命周期方法添加到 class 中

1. useEffect/useCallback 等
2. 依赖
3. 销毁时/下一次 useEffect 调用时销毁

#### 1.4.4. 正确使用 state

1. 不要直接修改
2. 更新可能是异步的

#### 1.4.5. 数据是向下流动的

### 1.5. 事件处理

1. 传入函数
2. 显示阻止默认行为 `e.preventDefault()`
3. 如果在回调中使用箭头函数，每次渲染时会创建不同的回调函数，如果该回调函数作为 props 传入子组件，可能会进行额外的重新渲染

### 1.6. 条件渲染

#### 1.6.1. 元素变量

#### 1.6.2. 与运算符 &&

#### 1.6.3. 三目运算符

#### 1.6.4. 阻止组件渲染

### 1.7. 列表&key

#### 1.7.1. 渲染多个组件

1. map

#### 1.7.2. 基础列表组件

1. key

#### 1.7.3. key

1. 帮助 React 识别哪些元素改变了
2. 如果顺序可能发生变化，不建议使用索引(index)作为 key 值
3. key 只有在就近的数组上下文才有意义
4. key 只是在兄弟节点之间必须唯一

### 1.7.4. 表单

1. 受控组件
2. 处理多个输入

```
const name = e.target.name
this.setState({
    [name]: e.target.value
})
```

3. 非受控组件
4. 成熟的解决方案: Formik

### 1.8. 状态提升

1. 提升到最近的公共父组件
2. 编写状态转换函数
3. 状态提升

### 1.9 组合 vs 继承

#### 1.9.1. 包含关系

1. 传入 props

#### 1.9.2. 特例关系

1. 传入特殊的 props

### 1.10. React 哲学

#### 1.10.1. 从设计稿开始

1. 将设计稿的 ui 划分为组件层级: 单一功能原则
2. 用 React 创建一个静态版本: 将渲染 ui 与添加交互分开,简单页面:自上而下;复杂页面:自下而上
3. 确定 ui state 的最小(且完整)的表示

```
1. 数据是否由父组件传过来
2. 是否会随着时间的推移保持不变
3. 是否可以根据其他state/props计算出该数据的值
```

4. 确定 state 放置的位置

```
1. 找到根据这个state渲染的所有组件
2. 找到他们的公共所有者组件
3. 改公共所有者组件或比它层次更高的组件应该拥有该state
4. 如果找不到合适的位置，创建一个新组件，放在最外面管理state
```

5. 添加反向数据流

## 2. 高级指引

### 2.1. 无障碍辅助功能

#### 2.1.1. 标准和指南

1. WCAG
2. WAI-ARIA

#### 2.1.2. 语义化的 HTML

1. fragment 短语法 `<><div>123</div></>`

#### 2.1.3. 无障碍表单

1. 标记
2. 在出错时提醒用户

#### 2.1.4 控制焦点

1. 键盘焦点与焦点轮廓
2. 跳过内容机制
3. 使用程序管理焦点 (修改 dom，焦点丢失)

#### 2.1.5. 鼠标和指针事件

1. 外部点击模式
2. 键盘操作

#### 2.1.6. 更复杂的组件

#### 2.1.7. 其他考虑因素

1. 设置语言
2. 设置文档标题
3. 色彩对比度
4. 开发及测试

```
1. 键盘操作
2. 开发辅助: eslint-plugin-jsx-a11y
3. 在浏览器中测试无障碍辅助功能: aXe,aXe-core 以及 react-axe
4. 屏幕朗读器
```

### 2.2. 代码分隔

#### 2.2.1. import()

1. webpack 检测到该语法时，会自动进行代码分隔
2. 使用 babel 时，要确定能够解析动态 import，而不是做转换:babel-plugin-syntax-dynamic-import

#### 2.2.2. React.lazy

1. lazy 和 Suspense 技术不支持服务端渲染
2. 异常捕获边界
3. 基于路由的代码分隔
4. 命名导出

### 2.3. Context

#### 2.3.1. 何时使用

1. 全局共享状态

#### 2.3.2. 使用之前的考虑

1. 倾入性很强,使组件难以复用,建议将样式与交互分开
2. 若是为了避免层层传递属性，可以将组件作为参数传递，但也会有层层传递组件的问题

#### 2.3.3. api

1. createContext
2. useContext

#### 2.3.4. 注意事项

1. context 的父组件更新时，如果 value 为传递时创建的一个对象，可能会重新创建对象，从而导出使用该 context 的组件的重复刷新，因此需要保存该状态

### 2.4. 错误边界

#### 2.4.1. 错误边界

1. componentDidCatch
2. getDerivedStateFromError

#### 2.4.2. 错误边界应该放置在哪

1. 顶层路由
2. 其他部分的组件

#### 2.4.3. 未捕获错误的新行为

#### 2.4.4. 组件栈追踪

#### 2.4.5. 关于 try/catch

#### 2.4.6. 关于事件处理器

### 2.5. Refs 转发

1. React.createRef
2. React.forwardRef
3. devtool: 高阶组件添加 displayName

### 2.6. Fragments

1. 短语法
2. Fragment

### 2.7. 高阶组件

1. 接受组件与参数，返回新的组件，不对原组价进行修改

#### 2.7.1. 不要改变原始组件，使用组合

#### 2.7.2. 约定

1. 将不相关的 props 传递给被包裹的组件
2. 最大化可组合性
3. 包装显示名称以便轻松调试

#### 2.7.3. 注意

1. 不要在 render 中使用 HOC
2. 务必复制静态方法: hoist-non-react-statics
3. refs 不会被传递

### 2.8. 与第三方库协同

#### 2.8.1. 集成其他 DOM 库

1. 操作 DOM,不会引起 react 的更新

#### 2.8.2. 和其他视图库集成

1. ReactDOM.render

#### 2.8.3. 与 Model 层集成

### 2.9. 深入 JSX

1. JSX 实际上会被 babel 编译成 React.createElement(Tag, props, children)

#### 2.9.1. 指定元素类型

1. React 必须在作用域内，即导入，或者挂载在全局变量
2. JSX 中使用点语法
3. 用户定义的组件必须以大写开头，小写的为 html 标签
4. JSX 不能是一个表达式 `<component[a] />` 会报错

#### 2.9.2. JSX 中的 props

1. 表达式
2. 字符串
3. props 默认值为 true
4. 属性展开

#### 2.9.3. JSX 中的子元素

1. 字符串字面量
2. JSX 子元素
3. js 表达式
4. 函数

```
const Component = (props) => {
    return [1, 2].map((item, index) => props.children(index))
}
<Component>
    {(index) => <div>{index}</div>}
</Component>
```

5. boolean、null、undefiend 会被忽略

### 2.10. 性能优化

#### 2.10.1. 使用生产版本

1. webpack 配置

```
module.exports = {
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin({ /* additional options here */ })],
  },
};
```

#### 2.10.2. 使用 Chrome Performance 标签分析组件

#### 2.10.3. 使用开发者工具中的分析器对组件进行分析

#### 2.10.4. 虚拟化长列表

react-window 和 react-virtualized 是热门的虚拟滚动库。

#### 2.10.5. 避免调停

1. shouldComponentUpdate
2. 不可变数据避免比较数组的指针是同一个

### 2.11. Portals

将组件挂载到其他 dom 元素

#### 2.11.1. 用法

1.

```
ReactDOM.createPortal(
    this.props.children,
    domNode
  );
```

2. 视觉上跳出其容器
3. 管理焦点

#### 2.11.2. 通过 Portal 进行事件冒泡

#### 2.12. Profiler

1. 用于分析组件性能，详情见 demo

### 2.13. 不使用 ES6

### 2.14. 不使用 JSX

### 2.15. 协调(diff)

#### 2.15.1. 涉及动力

1. render 会返回一颗不同的树，与前一棵树进行比较，获取最小操作数的复杂度为 O(m^3)
2. 启发式算法

```
1. 不同类型的元素会产生出不同的树
2. 通过key暗示哪些子元素在不同的渲染下保持稳定
```

#### 2.15.2. Diff 算法

当对比两颗树时，React 首先比较两棵树的根节点。不同类型的根节点元素会有不同的形态。

1. 比对不同类型的元素
2. 比对用一类型的的元素: style 会对比属性
3. 比对同类型的组件元素
4. 对子节点进行递归
5. keys

#### 2.15.3. 权衡

### 2.16. Refs&DOM

#### 2.16.1. 何时使用

1. 管理焦点，文本选择或媒体播放
2. 触发强制动画
3. 集成第三方 DOM 库

#### 2.16.2. 用法

1. `const ref = React.createRef; <div ref={ref} />`
2. `<div ref={el => this.ref = el} />`
3. `const ref = useRef(null); <div ref={ref}>`

### 2.17. Render Props

#### 2.17.1. 使用 Render Props 来解决横切关注点

例如: 关注鼠标的位置;那为什么不把它写成 hook 呢

#### 2.17.2. 使用 Props 而非 render

### 2.18. 静态类型检查

1. Flow
2. Typescript
3. Reason
4. Kotlin

### 2.19. 严格模式

1. StrictMode

#### 2.19.1. 作用

1. 识别不安全的生命周期
2. 关于使用过时字符串 ref API 的警告
3. 关于使用废弃的 findDOMNode 方法的警告
4. 检查意外的副作用
5. 检查过时的 context API

### 2.20. 使用 PropTypes 进行类型检查

### 2.21. 非受控组件

1. ref
2. defaultValue

### 2.22. Web Components

## 3. api 参考

### 3.1. React

#### 3.1.1 组件

1. React.Component
2. React.PureComponent
3. React.memo

#### 3.1.2. 创建 React 元素

1. React.createElement: JSX 调用
2. createFactory: 使用 JSX 的话不需要使用这个 api

#### 3.1.3. 转换元素

1. cloneElement
   几乎等同于

```
<element.type {...element.props} {...props}>{children}</element.type>
```

2. isValidElement(): 验证对象是否为 React 元素
3. React.Children: 处理 props.children

```
React.Children.map(children, function[(thisArg)])

```

#### 3.1.4. Fragments

1. React.Fragment

#### 3.1.5. Refs

1. React.createRef
2. React.forwardRef

#### 3.1.6. Suspense

1. React.lazy
2. React.suspense

#### 3.1.7. Hook

### 3.2. ReactDOM

#### 3.2.1. render

1. 在 container 里渲染一个 react 元素
2. 如果已经渲染过，则更新

#### 3.2.2. hydrate

与 render() 相同，但它用于在 ReactDOMServer 渲染的容器中对 HTML 的内容进行 hydrate 操作

#### 3.2.3. unmountComponentAtNode

1. 从 DOM 中卸载组件

#### 3.2.4. createPortal

```
ReactDOM.createPortal(child, container)
```

将子节点渲染到 container 节点中

### 3.3. ReactDOMServer

通常用于 node 服务端渲染

1. renderToString
2. renderToStaticMarkup
3. renderToNodeStream
4. renderToStaticNodeStream

### 3.4. DOM 元素

#### 3.4.1. 属性差异

1. checked
2. className
3. dangerouslySetInnerHTML
4. htmlFor
5. onChange
6. selected
7. style
8. suppressContentEditableWarning(尽量不要使用)
9. suppressHydrationWarning
10. value

#### 3.4.2. All Supported HTML Attributes

### 3.5. 合成事件

看不懂

### 3.6. Test Utilities

还没看

### 3.7. Test Renderer

还没看

### 3.8. JavaScript 环境要求

还没看

### 3.9. 术语表

还没看

## 4. Hook

### 4.1. Hook 简介

#### 4.1.1. 动机

1. 组件之间复用状态逻辑很难(不是共享数据，是复用逻辑): render props,高阶组件
2. 复杂组件变得难以理解(生命周期代码过多):小函数
3. 难以理解的 class

#### 4.1.2. 渐进策略

### 4.2. Hook 概览

#### 4.2.1. State Hook

1. 对应 state

#### 4.2.2. Effect Hook

副作用

#### 4.2.3. Hook 使用规则

1. 只能在函数最外层调用
2. 只能在 React 的函数组件与自动以的 Hook 中调用
3. linter 插件

#### 4.2.4. 自定义 Hook

1. 组件重用状态逻辑: 高阶组件，render props

#### 4.2.5. 其他 Hook

1. useContext
2. useReducer

### 4.3. 使用 State Hook

### 4.4. 使用 Effect Hook

1. 需要清除: 该 effect 下一次运行时，或者组件销毁时
2. 依赖
3. 会产生闭包,保存变量，无法获取外部最新值

### 4.5. Hook 规则

### 4.6. 自定义 Hook

### 4.7. Hook Api

#### 4.7.1. useState

#### 4.7.2. useEffect

#### 4.7.3. useContext

#### 4.7.4. useReducer

#### 4.7.5. useCallback

#### 4.7.6. useMemo

#### 4.7.7. useRef

#### 4.7.8. useImperativeHandle

#### 4.7.9. useLayoutEffect

#### 4.7.10. useDebugValue

### 4.8. FAQ

#### 4.8.1. 我应该使用单个还是多个 state 变量

1. 抽出 Hook
2. 找到平衡

#### 4.8.2. 如果惰性创建昂贵的对象

1. state 传入函数
2. useRef 外部传入 current

## 5. 测试

## 6. CONCURRENT 模式（实验阶段）

## 7. question

### 7.1. 关注点分离

### 7.2. 自动插入分号陷阱

### 7.3

```
1. react 16.3.1
2. react-router-dom 5.2.0
hooks报错
<Route>
    {component}
</Route>
```

```
hooks报错
<Route component={component} />
```

### 7.4. 表达式与组件

#### 7.4.1. 表达式

1. 转化为函数调用

```
{fn(1)} () => fn(1)
{1+1} () => 1 + 1 再执行该函数
{Component} () => () => <div>1</div> 返回的是一个函数，无法被渲染
```

#### 7.4.2. 组件

```
<Component> 直接执行该函数
```

### 7.5. 箭头函数作为 props 传入子组件

1. parent 重新渲染，onChange 被重新创建
2. Child 检测到 onChange 变化，重新渲染

```
<Parent>
    <Child onChange={() => {}} />
</parent>
```

3. 结论: 被当做 props 的函数一定不要在传参时创建，要在外面创建好了再传入组件

### 7.6. 受控、非受控

1. 受控组件依赖于 property,非受控组件则是 attribute

### 7.7. 转发 ref typescript 不会写

### 7.8. 静态方法与私有方法

静态指的是挂载在变量上的，私有是只能在类内部访问的
但它怎么编译成 javascript 的呢

### 7.9. 怎么分析性能并优化

### 7.10. diff

### 7.11. 服务端渲染

### 7.12. 看不懂合成事件的 api

### 7.13. 创建 useClientRect

### 7.14. 惰性初始 state

1. 为什么需要传函数才是惰性初始

```
useState(fn(a))
useState(() => fn(a))
```

### 7.15. 闭包
