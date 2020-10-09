module.exports = {
  extends: ['@aerian/eslint-config-preact', '@aerian/eslint-config-typescript'],
  rules: {
    semi: [2, 'never'],
    'prettier/prettier': ['error', { tabWidth: 2, proseWrap: 'always' }],
    complexity: ['error', 8],
  },
}
