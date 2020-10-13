<!-- @format -->

```typescript
const theme = {
    // 断点
    breakpoints: {
        key: ["xs", "sm", "md", "lg", "xl"]
        value: [0, 600, 960, 1280, 1920],

        // 用于生成媒体查询的css
        up: (key) => {},
        down: (key) => {},
        between: (start, end) => {},
        only: (key) => {},
        width: (key) => {}
    },

    // 方向 从左至右ltr 从右至左rtl
    direction: "ltr",

    // mixins
    // 用于生成对应的css样式
    mixins: {
        // https://github.com/mui-org/material-ui/issues/11539
        gutters: () => {},
        // https://stackoverflow.com/questions/52995225/how-does-one-use-or-get-started-with-theme-mixins-toolbar-in-material-ui
        toolbar: {}
    }

    // 空对象，不知道用处
    overrides: {},

    // 调色
    palette: {
        primary: {
            main

            // 若不指定，则根据main, tonalOffset计算
            light
            dark

            // 对比度文本，若不指定，则根据main计算
            constrastText
        },
        secondary: {},
        error: {},
        warning: {},
        info: {},
        success: {},
        text: {},
        // 不知道干嘛用的
        common: {},

        // 使用的调色板的类型
        type: "light",

        // 不知道用处
        grey: {},

        // 背景和文本的对比度
        contrastThreshold: 3,
        getContrastText: (background) => {},

        // 增强颜色
        augmentColor: (color) => {},
        // 色调偏移,用于计算light/dark
        tonalOffset: 0.2,

        // 分隔线的颜色
        divider

        background: {
            paper
            default
        }

        action: {
            active: "rgba(0, 0, 0, 0.54)"
            activatedOpacity: 0.12

            hover
            hoverOpacity

            selected
            selectedOpacity

            disabled
            disabledBackground

            focus
            focusOpacity
        },
    },

    // 不知道用处
    props: {},

    // 阴影
    shadows: [],

    // 文字铸排
    typography: {
        htmlFontSize: 16,

        pxToRem: ((size) => `${(size / htmlFontSize) * coef}rem`),

        // 用于计算文字间距
        round:  (value) => Math.round(value * 1e5) / 1e5,

        // 计算出rem为 14/16 = 0.875rem
        fontSize: 14,

        // ...
        // 其他的字体属性

        h1
        h2
        h3
        h4
        h5
        h6
        subTitle1
        subTitle2
        body1
        body2
        button
        caption
        overline
    },

    // 计算间距, 闭包保存了间距转换值
    // createMuiTheme时可传入spacing属性, number array
    spacing: () => {},

    // 不知道为什么要单独放在这里
    shape: {
        borderRadius: 4,
    },

    // 知道是动画，但不知道怎么用
    transitions: {},

    zIndex: {},

    // density 文档上有，但不知道怎么用
}
```
