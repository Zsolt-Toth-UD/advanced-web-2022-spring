module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    camelcase: ['error', { properties: 'always' }],
    curly: ['error', 'all'],
    indent: ['error', 2],
    'max-len': ['error', { code: 120 }],
    semi: ['error', 'always'],
  },
};
