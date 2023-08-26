module.exports = {
  bracketSameLine: true,
  bracketSpacing: false, 
  singleQuote: true,        // 使用单引号而不是双引号
  trailingComma: "all",     // 在多行结构中添加尾随逗号，可防止部分版本控制系统中的冗余更改
  printWidth: 80,           // 限制每行字符数为80个字符
  tabWidth: 2,              // 使用2个空格进行缩进
  useTabs: false,           // 不使用制表符进行缩进，使用空格
  semi: true,               // 在句末添加分号
  jsxSingleQuote: true,     // 在 JSX 中使用单引号
  arrowParens: "avoid",     // 只有一个参数时，箭头函数不添加括号
  endOfLine: "auto",        // 根据操作系统自动选择换行符
  overrides: [
    {
      files: "*.json",      // 针对 JSON 文件使用以下配置
      options: {
        tabWidth: 2,
        useTabs: false
      }
    }
  ]
};
