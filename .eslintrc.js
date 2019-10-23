module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'prettier',
        'prettier/vue',
        'plugin:nuxt/recommended',
        'plugin:vue/essential',
    ],
    // required to lint *.vue files
    plugins: [
        'prettier',
        'vue'
    ],
    // add your custom rules here
    rules: {}
  }
