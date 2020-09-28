/** @format */
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
    // 调色板
    palette: {
        primary: {
            main: '#ff4400',
            // 默认值为 从 main 中进行计算
            // light: '',
            // dark: '',
            // contrastText: '',
        },
        secondary: {},
        error: {},
        warning: {},
        info: {},
        success: {},
        // 使用 `getContrastText()` 来最大化
        // 背景和文本的对比度
        contrastThreshold: 3,
        // 例如，从红色 500（Red 500）切换到 红色 300（Red 300）或 红色 700（Red 700）。
        tonalOffset: 0.2,
    },
    /** 文字铸排
     * 自托管的字体
     */
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        fontSize: 12,
        htmlFontSize: 10, // html 元素font-size htmlFontSize/fontSize %
    },
    // 复写 全局变量
    overrides: {
        MuiIconButton: {
            sizeSmall: {
                // 调整间距来实现最小的触摸目标框
                marginLeft: 4,
                marginRight: 4,
                padding: 12,
            },
        },
        MuiCssBaseline: {
            '@global': {
                html: {
                    WebkitFontSmoothing: 'auto',
                },
            },
        },
    },
    // 间距
    spacing: 8,
    /** 断点
     * xs
     * sm
     * md
     * lg
     * xl
     * api theme.breakpoints.
     * up
     * down
     * between
     */
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    /** 密度
     *
     */

    /** z-index
     *
     */
});

theme = responsiveFontSizes(theme, {}); // 返回一个响应式排版的新主题。

// 设置type为dark
const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

// 用户偏好 useMediaQuery
