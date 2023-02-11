// Simple and most common matcher
test('Two plus Two equals Four', () => {
  expect(2 + 2).toBe(4);
})

test('ToBe vs toStrictEqual', () => {
  const SAME_OBJECT_ONE = [1];
  const SAME_OBJECT_TWO = SAME_OBJECT_ONE;

  const DIFF_OBJECT_ONE = [1];
  const DIFF_OBJECT_TWO = [1];

  expect(SAME_OBJECT_ONE).toBe(SAME_OBJECT_TWO); // OK!
  // expect(DIFF_OBJECT_ONE).toBe(DIFF_OBJECT_TWO); // Not OK!
  expect(DIFF_OBJECT_ONE).toStrictEqual(DIFF_OBJECT_TWO); // OK!
})

test('Object Assignment', () => {
  const EXAMPLE_DATA = {one: 1};
  EXAMPLE_DATA['two'] = 2;
  expect(EXAMPLE_DATA).toStrictEqual({one: 1, two: 2});
});