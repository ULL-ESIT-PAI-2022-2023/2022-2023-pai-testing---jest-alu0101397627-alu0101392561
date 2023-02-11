const sum = require('../../src/basic'); /// Import the function of basic

test('adds 1 + 2 to equal 3', () => { /// A basic example
  expect(sum(1, 2)).toBe(3);
}); 

describe('sum module', () => { /// We can use describe to divide the tests
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 1 + (-1) to equal 0', () => {
    expect(sum(1, -1)).toBe(0);
  });
});