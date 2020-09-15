### 1. 项目简介
他们转换成简短 URL 来使用的服务

#### 1.1. 添加 (Add)

给定一个较长的 URL，会将其转换成较短的版本，例如：
```
http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=tokyo&sll=37.0625,-95.677068&sspn=68.684234,65.566406&ie=UTF8&hq=&hnear=Tokyo,+Japan&t=h&z=9
```
- (A) 转变为：`http://goto/UrcGq`
- (B) 并保存这对数据

#### 1.2. 重定向 (Redirect)

短网址被请求时，会把用户重定向到原始的长 URL。因此如果你在浏览器输入网址 (B)，会被重定向到页面 (A)。

1. struct 传的是地址?
2. Lock为什么会导致不能写入
3. gob
4. panic
5. defer
6. go
7. json
8. 如何获取协程数量runtime.NumGoroutine()