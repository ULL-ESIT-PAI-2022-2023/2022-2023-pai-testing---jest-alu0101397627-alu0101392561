const sum = require('../../src/basic'); /// Import the function of basic

test('adds 1 + 2 to equal 3', () => { /// A basic example
  expect(sum(1, 2)).toBe(3);
});

describe('sum module', () => { /// We can use the describe sentence to divide the tests
  
  //console.log('I'm here') // Is posible to print message during the text
  
  test('adds 1 + 2 to equal 3', () => { /// Also we can be able to use more than one expect per test
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, 2)).not.toBe(10);
  });

  test('adds 4 + 6 to equal 10', () => {
    expect(sum(4, 6)).toBe(10);
    expect(sum(4, 6)).not.toBe(null);
  });
});