const calculator = require('../src/calculator');

describe('Calculator Test Suite', () => {
  it('adds two numbers', () => {
    // given
    const a = 3;
    const b = 5;
    const expected = 8;
    // when
    const actual = calculator.add(a, b);
    // then
    expect(actual).toBe(expected);
  });

  it('subtracts two numbers', () => {
    // given
    const a = 3;
    const b = 5;
    const expected = -2;
    // when
    const actual = calculator.sub(a, b);
    // then
    expect(actual).toBe(expected);
  });

  it('multiplies two numbers', () => {
    // given
    const a = 3;
    const b = 5;
    const expected = 15;
    // when
    const actual = calculator.mul(a, b);
    // then
    expect(actual).toBe(expected);
  });

  it('divides two numbers', () => {
    // given
    const a = 10;
    const b = 5;
    const expected = 2.0;
    // when
    const actual = calculator.div(a, b);
    // then
    expect(actual).toBe(expected);
  });
});
