<!-- @format -->

[中文文档](https://www.tslang.cn/docs/handbook/basic-types.html)

[输入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/)

# 中文文档

## 1. 手册指南

### 1.1 基础类型

1. boolean
2. number
3. string
4. array
5. tuple
6. enum
7. any
8. void
9. null/undefined
10. never
11. object
12. 类型断言

### 1.2. 变量声明

1. var
2. let
3. const

### 1.3. 接口

#### 1.3.1. interface

1. 不会检查多余的属性
2. 可选属性 vs 结构
3. 只读属性: readonly vs const

```
属性用readonly
变量用const
```

4. 额外的属性检查

```
使用可选属性会触发额外的属性检查
```

5. 函数类型
6. 可索引的类型

```
1. 数字索引的返回值必须是字符串索引返回值类型的子类型
2. 属性必须与索引返回类型相匹配
```

7. 基础多个接口
8. 混合类型
9. 接口继承类

#### 1.3.2. class

1. 不会检查构造函数签名
2. 类继承接口

3. implements 接口; extends 类

#### 1.3.3. 总结

1. class
2. interface
3. extends
4. implements

### 1.4. 类

#### 1.4.1. public/private/protected

1. public 能在外面访问
2. private 只能在该类里访问
3. protected 只能在该类与子类里访问

#### 1.4.2. readonly

只能在声明时或者构造函数里被初始化

#### 1.4.3. 参数属性

1. 在 constructor 里定义并初始化一个成员

#### 1.4.4. get/set

#### 1.4.5. 静态属性 static

#### 1.4.6. 抽象类 abstract

1. 不会被实例化
2. 不包含具体实现的必须在派生类中实现（3.9 ? 没有 lint 提示）

### 1.5. 函数

1. 可选参数与默认参数
2. 剩余参数
3. this、箭头函数
4. 重载

### 1.6. 泛型

1. 在泛型约束中使用类型参数
2. 在泛型里使用类类型

### 1.7. 枚举

1. 数字枚举
2. 字符串枚举
3. 异构枚举
4. 计算的和常量成员
5. 联合枚举与枚举成员的类型
6. 运行时的枚举
7. 反向映射
8. const 枚举
9. 外部枚举

### 1.8. 类型推论

1. 未声明的会被推论
2. 最佳通用类型/联合类型
3. 上下文类型

### 1.9. 类型兼容性

1. 基于结构子类型，即检查属性

```
const check(source, target) {
    for (let key in source) {
        if (!target[key] || target[key].type !== source[key].type) {
            return false
        }
    }
    return true
}
```

2. 函数，相反
3. 可选参数与剩余参数：属于参数被当作无限个可选参数
4. 枚举: 不同枚举之间不兼容
5. 类：值比较实例成员，静态成员和构造函数不比较
6. 私有成员和受保护成员也会比较
7. 泛型
8. implements/extends

### 1.10. 高级类型

#### 1.10.1. 交叉类型 &

#### 1.10.2. 联合类型 |

#### 1.10.3. 自定义类型报护

#### 1.10.4. typeof 类型报护

#### 1.10.5. interface 类型报护

#### 1.10.6. null --strictNullChecks

#### 1.10.7. 可选参数

#### 1.10.8. 类型别名

1. vs interface
2. 字符串字面量
3. 数字字面量
4. 可辩别联合

#### 1.10.9. 完整性检查

1. strictNullChecks
2. never

#### 1.10.10. 多态的 this

#### 1.10.11. 索引类型

1. keyof
2. in

### 1.11. Symbols

### 1.12. 迭代器和生成器

Symbol.iterator 方法

1. for ... in
2. for ... of

### 1.13. 模块

#### 1.13.1. 运行环境

1. node: CommonJs
2. 浏览器: Require.js

#### 1.13.2. 导出

1. 导出语句: export/ export default
2. 重新导出
3. 内容联合

#### 1.13.3. 导入

1. `import`
2. `import * as xx`
3. 副作用导出

#### 1.13.4. 可选的模块加载

1. require

#### 1.13.5. 外部模块

#### 1.13.6. 模块声明通配符

导入非 JavaScript 内容

```
declare module '*!text' {
    const content: string;
    export default context;
}
```

#### 1.13.7. 创建模块结构指导

1. 尽可能地在顶层导出
2. 如果仅导出单个 class 或 function，使用 export default
3. 如果要导出多个对象，把它们放在顶层里导出
4. 明确地列出导入的名字
5. 使用命名空间导入模式当你要导出大量内容的时候
6. 使用重新导出进行扩展
7. 模块里不要使用命名空间

### 1.14. 命名空间

提供逻辑分组和避免命名冲突

没怎么看懂，不知道为什么要这么做

### 1.15. 命名空间和模块的陷阱

1. 对模块使用 /// <referentce>
2. 不必要额命名空间

### 1.16. 模块解析

#### 1.16.1. 路径

1. 相对
2. 非相对

#### 1.16.2. 模块解析策略

1. Classic

```
在文件/root/src/folder/A.ts

import { b } from "moduleB"

1. /root/src/folder/moduleB.ts
2. /root/src/folder/moduleB.d.ts
3. /root/src/moduleB.ts
4. /root/src/moduleB.d.ts
5. /root/moduleB.ts
6. /root/moduleB.d.ts
7. /moduleB.ts
8. /moduleB.d.ts
```

2. Node

```
1. 文件
2. package.json main
3. 文件夹 index
```

#### 1.16.3. typescript 模块解析

1. ts
2. tsx
3. d.ts

4. base url
5. paths // 路径映射
6. rootDirs // 虚拟目录

```
{
  "compilerOptions": {
    "rootDirs": [
      "src/zh",
      "src/de",
      "src/#{locale}"
    ]
  }
}
```

#### 1.16.4. 跟踪模块解析

--traceResolution

### 1.17. 声明合并

#### 1.17.1. 三种实体

1. 命名空间
2. 类型
3. 值

#### 1.17.2. 合并接口

#### 1.17.3. 命名空间与类和函数和枚举类型合并

1. 扩展属性

#### 1.17.3. 合并命名空间

#### 1.17.4. 非法的合并

#### 1.17.5. 全局扩展

### 1.18. jsx

### 1.19. 装饰器

1. 类声明
2. 方法
3. 访问符
4. 属性
5. 参数

#### 1.19.1. 装饰器工厂

#### 1.19.2. 装饰器组合

#### 1.19.3. 类装饰器

1. 传入 constructor 对 constructor 进行处理

#### 1.19.4. 方法装饰器

1. enumabled(false)
2. target
3. propertyKey
4. descriptor

#### 1.19.5. 访问器装饰器

#### 1.19.6. 属性装饰器

#### 1.19.7. 参数装饰器

#### 1.19.8. 源数据

### 1.20. 混入

### 1.21. 三斜线指令

### 1.22. JavaScript 文件类型检查

## 101. question

1. 接口 继承 类(私有属性)，类 继承 接口，怎么写私有属性(不能写)

```

```

因为该接口只能被这个类或其子类实现

```

2. 在泛型约束中使用类型参数
```

3. keyof 索引类型查询操作符

4. 装饰器方法的参数
