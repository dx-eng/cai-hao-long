module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? '' : '',
    'no-debugger': process.env.NODE_ENV === 'production' ? '' : ''
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
