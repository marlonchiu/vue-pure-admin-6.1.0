// @ts-check

/** @type {import("prettier").Config} */
export default {
  // 箭头函数只有一个参数的时候可以忽略括号
  arrowParens: "avoid",
  // 括号内部不要出现空格
  bracketSpacing: true,
  // 使用单引号（JS），双引号（JSX）
  singleQuote: true,
  // 后置逗号，多行对象、数组在最后一行增加逗号
  trailingComma: "none",
  // 行宽 - 适当调整以触发换行
  printWidth: 100, // 从 160 调整为 100，让长属性行更容易触发换行
  // 分号
  semi: false,
  // 缩进
  tabWidth: 2
};
