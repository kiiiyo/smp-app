module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json'
      }
    }
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // Enable
    quotes: ['warn', 'single'],
    'no-extra-semi': 'warn',
    '@typescript-eslint/no-unused-vars': ['error'],

    // Disable
    'no-unused-vars': 'off',
    '@typescript-eslint/no-empty-function': 'off'
  }
}
