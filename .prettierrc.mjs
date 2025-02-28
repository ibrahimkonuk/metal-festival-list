const config = {
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  bracketSpacing: true,
  bracketSameLine: false,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '.*styles.css$',
    '^react$',
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '^@/.*$',
    '^../(?!.*.css$).*$',
    '^./(?!.*.css$).*$',
    '\\.css$',
  ],
};

export default config;
