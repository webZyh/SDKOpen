module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    "linebreak-style": ["error", "windows"], //换行符标准
    "func-names": 0,
    "guard-for-in": 0,    //for in报错
    "no-restricted-syntax": 0,  //for in报错
    "no-trailing-spaces": ["error",{
      "skipBlankLines": true  //允许在空行上结尾空白
    }],
    "no-param-reassign": 0,   //使用Vue. 报错
    "global-require": 0,      //不在顶部使用require()
  },
};
