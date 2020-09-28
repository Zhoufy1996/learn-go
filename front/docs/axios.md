<!-- @format -->

### 1. 什么是 axios

1. 基于 promise 的 HTTP 库(不支持 promise，有降级处理吗)
2. 浏览器和 node.js 使用

### 2. 特性

1. 从浏览器创建 XMLHttpRequests
2. 从 node.js 创建 http 请求
3. 支持 Promise API
4. 拦截请求和响应
5. 转换请求数据和响应数据
6. 取消请求
7. 自动转换 JSON 数据
8. 客户端支持防御 XSRF

### 3. axios API

#### 3.1. axios(config)

```
method
url
data
responseType
```

### 4. 请求方法的别名

1. axios.request(config)
2. axios.get(url, config)
3. axios.delete(url, config)
4. axios.head(url, config)
5. axios.options(url, config)
6. axios.post(url, data, config)
7. axios.put(url, data, config)
8. axios.patch(url, data, config)

### 5. 并发

1. axios.all
2. axios.spread

### 6. 创建实例

### 7. 请求配置

### 8. 响应结构

### 9. 配置默认值

### 10. 拦截器

### 11. 取消请求

### 12. 编码

### 101.question

1. 自动取消多余请求
2. 封装 throttle/debounce
3. 请求头
4. 外部注入配置
