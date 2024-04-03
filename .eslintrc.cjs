module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'react-refresh/only-export-components': [ 'warn', { allowConstantExport: true }, ],
    'semi': 'off',
    '@typescript-eslint/semi': [ 'error', 'always' ],
    "@typescript-eslint/quotes": ["error", "single"],
    "eol-last": ["error", "always"],
    "max-len": ["error", { "code": 100 }]
  },
}