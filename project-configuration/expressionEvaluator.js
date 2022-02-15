const calculator = require('./calculator')

const isValidExpression = (expression) => {
    const expressionRegEx = /^\d+ [+,\-,*,\/] \d+$/
    return expressionRegEx.test(expression);
}

const replaceOperationSignWithFunction = (sign) => {
    switch (sign) {
        case '+': return calculator.add;
        case '-': return calculator.sub;
        case '*': return calculator.mul;
        case '/': return calculator.div;
    }
}

const evaluate = (expression) => {
    if(!isValidExpression(expression)){
        throw 'Expression is not Valid!'
    }
    const [operand1, sign, operand2] = expression.split(' ');
    return replaceOperationSignWithFunction(sign)(parseInt(operand1), parseInt(operand2));
}

module.exports = evaluate;
