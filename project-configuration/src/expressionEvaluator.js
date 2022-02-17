const calculator = require('./calculator');

const isValidExpression = (expression) => {
  const expressionRegEx = /^\d+ [+,\-,*,/] \d+$/;
  return expressionRegEx.test(expression);
};

const replaceOperationSignWithFunction = (sign) => {
  let result = calculator.add;
  switch (sign) {
  case '+': result = calculator.add; break;
  case '-': result = calculator.sub; break;
  case '*': result = calculator.mul; break;
  case '/': result = calculator.div; break;
  default: result = calculator.add;
  }
  return result;
};

const evaluate = (expression) => {
  if (!isValidExpression(expression)) { throw new Error('Expression is not Valid!'); }

  const [operand1, sign, operand2] = expression.split(' ');
  return replaceOperationSignWithFunction(sign)(parseInt(operand1, 10), parseInt(operand2, 10));
};

module.exports = evaluate;
