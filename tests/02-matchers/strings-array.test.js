// Strings
test('"Value" does not contains i', () => {
  expect('Value').not.toMatch(/i/);
})

// Arrays and Iterables
test('Array contains 3', () => {
  let values = [1, 3, 5, 8];
  expect(values).toContain(3);
})