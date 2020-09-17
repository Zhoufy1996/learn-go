### 1. 数据源
#### 说明
1. 数据是否存在
2. 数据覆盖
3. 格式出错怎么办
4. 保存

#### api
```go
// 1. 加载文件
cfg, err := ini.Load(
    []byte("raw data"), // 原始数据
    "filename",         // 文件路径
    ioutil.NopCloser(bytes.NewReader([]byte("some other data"))),
)

cfg := ini.Empty()

err := cfg.Append("other file", []byte("other raw data"))

cfg, err := ini.LooseLoad("filename", "filename_404") // 忽略不存在的文件

// 2. 数据覆写
cfg, err := ini.Load("my.ini", "my.ini.local")

// 3. 跳过无法识别的数据行
cfg, err := ini.LoadSources(ini.LoadOptions{
    SkipUnrecognizableLines: true,
}, "other.ini")

// 4. 保存配置
err = cfg.SaveTo("my.ini")
err = cfg.SaveToIndent("my.ini", "\t")
ini.PrettyFormat = false // 键值对对齐

cfg.WriteTo(writer)
cfg.WriteToIndent(writer, "\t")
```
### 2. 分区
#### 说明
1. 分区是否存在
2. 创建分区
3. 读取分区
#### api
```go
// 1. 获取指定分区
sec, err := cfg.GetSection("section name")

// 2. 获取默认分区
sec, err := cfg.GetSection("")

// 3. 创建分区
err := cfg.NewSection("new section")

// 4. 获取所有分区对象或名称
secs := cfg.Sections()
names := cfg.SectionStrings()

// 6. 无法解析的分区
cfg, err := ini.LoadSources(ini.LoadOptions{
    UnparseableSections: []string{"COMMENTS"},
}, `[COMMENTS]
<1><L.Slide#2> This slide has the fuel listed in the wrong units <e.1>`)

body := cfg.Section("COMMENTS").Body()
```
```ini
NAME = ini
VERSION = v1
IMPORT_PATH = gopkg.in/%(NAME)s.%(VERSION)s

[package]
CLONE_URL = https://%(IMPORT_PATH)s

[package.sub]
```
```go
// 5. 读取父子分区
cfg.Section("package.sub").Key("CLONE_URL").String()    // https://gopkg.in/ini.v1

```
### 3. 键
#### 说明
1. 获取某个键
2. 是否存在
3. 增加键
4. 键多值
5. 大小写
6. bool键
#### api
```go
// 1. 获取键
key, err := cfg.Section("").GetKey("key name")

// 2. 是否存在
yes := cfg.Section("").HasKey("key name")

// 3. 新建
err := cfg.Section("").NewKey("name", "value")

// 4. 获取分区下的所有键或键名
keys := cfg.Section("").Keys()
names := cfg.Section("").KeyStrings()

// 5. clone
hash := cfg.Section("").KeysHash()

// 6. 忽略大小写
cfg, err := ini.InsensitiveLoad("filename")

// 7. bool键
cfg, err := ini.LoadSources(ini.LoadOptions{
    AllowBooleanKeys: true,
}, "my.cnf")

// 8. 同个键多个值
f.Section(`remote "origin"`).Key("url").String() // 最后一个值
f.Section(`remote "origin"`).Key("url").ValueWithShadows() // 所有值

// 9. 读取自增键
cfg.Section("features").KeyStrings()

// 10. 上级父区所有键名
cfg.Section("package.sub").ParentKeys() // ["CLONE_URL"]

```
### 4. 键值
#### 说明
1. 获取值
2. 值是否存在
3. 保存值
4. 值校验
5. 值类型转换

#### api
```go
// 1. 获取值
val := cfg.Section("").Key("key name").Value()

// 2. 校验值
val := cfg.Section("").Key("key name").Validate(func(in string) string {
    if len(in) == 0 {
        return "default"
    }
    return in
})

// 3. 判断值是否存在
yes := cfg.Section("").HasValue("test value")

// 4. 转换值类型
v = cfg.Section("").Key("String").MustString("default")
v = cfg.Section("").Key("STRING").In("default", []string{"str", "arr", "types"})

// 5. 多行值
cfg.Section("advance").Key("ADDRESS").String()

// 6. 切片处理
vals = cfg.Section("").Key("STRINGS").Strings(",")

// 7. 递归读取键值 会向父级找
%(NAME)s 
```

### 5. 注释
1. 所有以 # 或 ; 开头的行
2. 所有在 # 或 ; 之后的内容
3. 分区标签后的文字 (即 [分区名] 之后的内容)
```go
// 忽略行内注释
cfg, err := ini.LoadSources(ini.LoadOptions{
    IgnoreInlineComment: true,
}, "app.ini")

// 要求注释前必须带有一个空格
cfg, err := ini.LoadSources(ini.LoadOptions{
    SpaceBeforeInlineComment: true,
}, "app.ini")
```

### 6. 结构体与分区双向映射

### 7. 自定义键名与键值映射器