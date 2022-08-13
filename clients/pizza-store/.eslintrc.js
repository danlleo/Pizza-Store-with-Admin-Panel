// eslint-disable-next-line no-undef
module.exports = {
    env: {
      browser: true,
      es2021: true
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'standard',
      'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: [
      'react',
      '@typescript-eslint'
    ],
    rules: {
      'import/no-anonymous-default-export': 0,
      'react/jsx-uses-react': 0,
      'react/display-name': 0,
      'react/react-in-jsx-scope': 0,
      'no-unused-vars': 1
    }
  }
  