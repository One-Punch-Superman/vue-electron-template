module.exports = {
    tabWidth: 2,
    printWidth: 120, // 最大行数
    singleQuote: true, // 使用单引号
    semi: true, // 句尾使用分号
    trailingComma: 'none', // 对象末尾不使用逗号
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
