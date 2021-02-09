module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'linebreak-style': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'react/prop-types': [2, { ignore: ['children'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 0,
    // '@typescript-eslint/no-explicit-any': 'off',
    'padding-line-between-statements': [
      'error',
      { 'blankLine': 'always', 'prev': ['const', 'let', 'var'], 'next': '*' },
      { 'blankLine': 'any', 'prev': ['const', 'let', 'var'], 'next': ['const', 'let', 'var'] },
      { 'blankLine': 'always', 'prev': ['case', 'default'], 'next': '*' },
      { 'blankLine': 'always', 'prev': ['block'], 'next': '*' },
      { 'blankLine': 'always', 'prev': ['function'], 'next': '*' },
      { 'blankLine': 'always', 'prev': ['block-like'], 'next': '*' },
      { 'blankLine': 'never', 'prev': 'import', 'next': 'import' },
    ]
  },
}
