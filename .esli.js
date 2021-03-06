module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'standard'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        indent: ['error', 4],
        'space-before-function-parent': ['error', {
            anonymous: 'always',
            named: 'never'
        }],
        semi: [2, 'never']
    }
}
// TODO: переиминовать в .esli.js для проверки стилистики кода
