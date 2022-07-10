module.exports = {
  tabWidth: 2,
  // 最大行数
  printWidth: 120,
  // 使用单引号
  singleQuote: true,
  // 句尾使用分号
  semi: true,
  // 对象末尾不使用逗号
  trailingComma: 'none',
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200
      }
    }
  ],
  arrowParens: 'always'
};
