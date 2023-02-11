// Numbers
test('Two plus Two', () => {
  const VALUE = 2 + 2;
  expect(VALUE).toBeGreaterThan(3);
  expect(VALUE).toBeGreaterThanOrEqual(3.5);
  expect(VALUE).toBeLessThan(5);
  expect(VALUE).toBeLessThanOrEqual(4.5);
  expect(VALUE).toStrictEqual(4);
});

test('Floating values', () => {
  const VALUE = 0.1 + 0.2;
  //expect(VALUE).toStrictEqual(0.3);
  expect(VALUE).toBeCloseTo(0.3);
})