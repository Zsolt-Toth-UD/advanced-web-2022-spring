const expressionEvaluator = require('../src/expressionEvaluator');

jest.mock('../src/calculator');
const calculator = require('../src/calculator');

describe('Expression Evaluator Test Suite', () => {
  it('demonstrates mocking', () => {
    // given
    const mockedValue = 1;
    calculator.add = jest.fn(() => mockedValue);
    // when
    const actual = calculator.add(1, 2);
    // then
    expect(actual).toBe(mockedValue);
  });

  it('evaluates an addition', () => {
    // given
    const expression = '5 + 3';
    const expected = 8;
    calculator.add.mockReturnValue(expected);
    // when
    const actual = expressionEvaluator(expression);
    // then
    expect(actual).toBe(expected);
    expect(calculator.add).toHaveBeenCalled();
  });

  it('evaluates a subtraction', () => {
    // given
    const expression = '5 - 3';
    const expected = 2;
    calculator.sub.mockReturnValue(expected);
    // when
    const actual = expressionEvaluator(expression);
    // then
    expect(actual).toBe(expected);
    expect(calculator.sub).toHaveBeenCalled();
  });

  it('evaluates a multiplication', () => {
    // given
    const expression = '5 * 3';
    const expected = 15;
    calculator.mul.mockReturnValue(expected);
    // when
    const actual = expressionEvaluator(expression);
    // then
    expect(actual).toBe(expected);
    expect(calculator.mul).toHaveBeenCalled();
  });

  it('evaluates a division', () => {
    // given
    const expression = '6 / 3';
    const expected = 2.0;
    calculator.div.mockReturnValue(expected);
    // when
    const actual = expressionEvaluator(expression);
    // then
    expect(actual).toBe(expected);
    expect(calculator.div).toHaveBeenCalled();
  });
});
