module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'globals': {
    'db': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  'rules': {
    // 'indent': [
    //   'error',
    //   4
    // ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    "prettier/prettier": [
      "error"
    ]
  }
}
