module.exports = {
  root: true,
  env: { browser: true, node: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    "plugin:react/jsx-runtime",
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'space-in-parens': 'on',
    'object-curly-spacing': 'on',
    'object-curly-newline': 'on',
    'array-bracket-spacing': 'on',
    'array-bracket-newline': 'on',
    'no-implicit-any': 'on',
  },
  settings: {
    react: {
      version: 'detect',
    }
  }
}
