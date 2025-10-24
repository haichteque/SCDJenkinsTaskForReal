
const calculator = require('./calculator');

test('add 2 + 3 = 5', () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test('subtract 3 - 2 = 1', () => {
    expect(calculator.subtract(3, 2)).toBe(1);
});

test('multiply 4 * 6 = 24', () => {
    expect(calculator.multiply(4, 6)).toBe(24);
});

test('divide 12 / 2 = 6', () => {
    expect(calculator.divide(12, 2)).toBe(6);
});