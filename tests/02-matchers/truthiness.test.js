// Truthiness
test('Null', () => {
  const NULL_EXAMPLE = null;
  expect(NULL_EXAMPLE).toBeNull();
  expect(NULL_EXAMPLE).toBeDefined();
  expect(NULL_EXAMPLE).not.toBeUndefined();
  expect(NULL_EXAMPLE).not.toBeTruthy();
  expect(NULL_EXAMPLE).toBeFalsy();
});