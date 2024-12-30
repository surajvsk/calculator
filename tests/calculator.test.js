const Calculator = require('../src/calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('should add two numbers correctly', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('should subtract two numbers correctly', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test('should multiply two numbers correctly', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test('should divide two numbers correctly', () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });

  test('should throw an error when dividing by zero', () => {
    expect(() => calculator.divide(6, 0)).toThrow('Division by zero is not allowed');
  });
});
