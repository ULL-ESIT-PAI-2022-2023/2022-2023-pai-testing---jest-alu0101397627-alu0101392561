const getRandomNumber = require('../../src/mock');

const randomNumberExpected = 0.123456789 /// we create a possible result of calling the function

beforeEach(() => {
  // In the before each, we use the funcionalities of the mocks function to emulate the random number using jest.spy on
  jest.spyOn(global.Math, 'random').mockReturnValue(randomNumberExpected);
});

afterEach(() => {
  // We restore de original result
  jest.spyOn(global.Math, 'random').mockRestore();
});

test('it should return a random value', () => {
  // Because of the before each, we know the result, so the test will be succesfull
  expect(getRandomNumber()).toBe(randomNumberExpected);
});