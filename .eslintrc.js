module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['standard-with-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@stylistic/js'],
  root: true,
  rules: {
    '@typescript-eslint/semi': 'off',
    '@stylistic/js/semi': ['error', 'always'],
  },
  overrides: [
    {
      files: ['./tests/*'],
      parserOptions: {
        project: './tsconfig.tests.json',
      },
    },
  ],
};
