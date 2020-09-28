/** @format */

const babelConfig = (api) => {
    api.cache(true);
    // 先插件后预设

    // 从后往前
    const presets = ['@babel/typescript', '@babel/preset-react'];

    // 从前往后
    const plugins = ['react-hot-loader/babel'];
    return {
        presets,
        plugins,
    };
};

module.exports = babelConfig;
