/** @format */

const eslintConfig = {
    parser: '@typescript-eslint/parser',
    plugins: ['typescript', 'react-hooks'],
    extends: [
        'airbnb',
        'plugin:prettier/recommended', // 支持perttier作为rules
    ],
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    parserOptions: {
        sourceType: 'module', // 解决ImportDeclaration should appear when the mode is ES6 and in the module context报错
    },
    settings: {
        'import/resolver': {
            // use <root>/tsconfig.json
            typescript: {
                alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
            },
        },
    },
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.jsx', 'tsx'] }], // jsx使用的文件后缀
        'react/jsx-indent': [2, 4, { indentLogicalExpressions: true }], // jsx 空格为4
        'react/jsx-indent-props': [2, 4],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
            },
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                tsx: true,
                ts: true,
            },
        ],
        'import/prefer-default-export': 'off',
        'react/jsx-curly-newline': ['off'],
        'no-unused-vars': ['off'],
        'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
        'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖
        'react/require-default-props': ['off'],
        'react/jsx-props-no-spreading': [
            'error',
            {
                exceptions: ['DragItem', 'DropContainer', 'DropDragItem'],
            },
        ],
    },
};

module.exports = eslintConfig;
