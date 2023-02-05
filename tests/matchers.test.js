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

// Truthiness
test('Null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

// Numbers
test('Two plus Two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  expect(value).toEqual(4);
});

test('Floating values', () => {
  const value = 1.0 + 2.0;
  // expect(value).toBe(3.0);
  expect(value).toBeCloseTo(3.0);
})

// Strings
test('"Value" does not contains i', () => {
  expect('Value').not.toMatch(/i/);
})

// Arrays and Iterables
test('Array contains 3', () => {
  let values = [1, 3, 5, 8];
  expect(values).toContain(3);
})

// Exceptions
const errorFunction = () => {
  throw new Error('An error has occurred.');
} 

test('Divide two numbers', () => {
  expect(() => errorFunction()).toThrow();
  expect(() => errorFunction()).toThrow(/error/);
  expect(() => errorFunction()).toThrow('An error has occurred.');
})