// Simple and most common matcher
test('Two plus Two equals Four', () => {
  expect(2 + 2).toBe(4);
})

test('ToBe vs ToEqual', () => {
  let a = [ 3 ];
  let b = [ 3 ];
  expect(a).not.toBe(b);
  expect(a).toEqual(b);
})

test('Object Assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});