// Exceptions
const errorFunction = () => {
  throw new Error('An error has occurred.');
} 

test('Divide two numbers', () => {
  expect(() => errorFunction()).toThrow();
  expect(() => errorFunction()).toThrow(/error/);
  expect(() => errorFunction()).toThrow('An error has occurred.');
})