module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier',
    'plugin:vue/essential'
  ],
  plugins: ['vue']
};

// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     node: true,
//   },
//   parserOptions: {
//     parser: '@babel/eslint-parser',
//     requireConfigFile: false,
//     sourceType: 'module',
//   },
//   extends: [
//     '@nuxtjs',
//     'plugin:nuxt/recommended',
//     'prettier',
//     'plugin:vue/essential',
//   ],
//   plugins: ['vue'],
//   // add your custom rules here
//   rules: {},
// };
