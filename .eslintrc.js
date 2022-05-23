const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['.eslintrc.js', 'webpack.config.js'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    }],
    '@typescript-eslint/type-annotation-spacing': ['error',{
      before: false,
      after: true,
      overrides: { arrow: { before: true, after: true }},
    }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'enumMember',
        'format': ['UPPER_CASE']
      }
    ],
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'react/forbid-prop-types': 'off',
    'no-multiple-empty-lines': 'off',
    'max-len': ['error', { code: 140 }],
    'implicit-arrow-linebreak': 'off',
    'no-console': 'error',
    'react/jsx-no-useless-fragment': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
        moduleDirectory: [
          'node_modules',
          'src/',
          path.resolve(__dirname, '../../node_modules'),
        ],
      },
    },
  },
};
