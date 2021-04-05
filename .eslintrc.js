module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "no-plusplus": 0,
    'prefer-template': "warn",
    'prefer-destructuring':'warn',
    'no-param-reassign':'warn',
    'object-curly-newline': 0,
    'no-else-return': 0,
    'no-use-before-define': 0,
  },
};
