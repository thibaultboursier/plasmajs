module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:flowtype/recommended',
    'plugin:lodash/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true,
    },
    ecmaVersion: 2016,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', 'lodash', 'flowtype'],
  rules: {
    'prettier/prettier': ['error'],
    'react/display-name': ['off'],
  },
};
