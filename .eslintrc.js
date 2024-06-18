module.exports =
  // root: true,
  // extends: ['plugin:@next/next/recommended', '@payloadcms'],
  // ignorePatterns: ['**/payload-types.ts'],
  // plugins: ['prettier'],

  {
    extends: ['airbnb', 'prettier'],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'error',
      'import/extensions': 0,
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'func-names': 'off',
      'object-shorthand': 'off',
      indent: ['error', 2],
    },
  }
