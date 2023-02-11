// Strings
test('"Value" does not contains i', () => {
  expect('Value').not.toMatch(/i/);
});

// Arrays and Iterables
test('Array contains 3', () => {
  const EXAMPLE_VALUES = [1, 3, 5, 8];
  expect(EXAMPLE_VALUES).toContain(3);
});