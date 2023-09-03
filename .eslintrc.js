module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'react-native/react-native': true, // 指定 React Native 环境
  },
  overrides: [
    {
      files: ['src/**/*.tsx','src/**/*.ts','src/**/*.js','src/**/*.jsx'],
      parser: '@typescript-eslint/parser', // 使用 TypeScript 解析器
      plugins: ["react", "react-native", "@typescript-eslint"],
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended"
      ],
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      rules: {
        'no-console': 'warn', // 禁止使用 console，警告级别
        'no-unused-vars': 'error', // 未使用的变量，错误级别
        'semi': ['error', 'always'], // always 表示要求分号
        "react/react-in-jsx-scope": "off", // 使用jsx语法时不校验是否导入React
        '@typescript-eslint/no-explicit-any': 'off', // 允许使用any类型
      }
    }
  ]
};
