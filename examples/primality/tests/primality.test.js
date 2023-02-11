const prime = require('../src/primality');

// Timeout for not async functions
const testTimeoutInMs = 5000; // 5 seconds
let testStartTime;

beforeEach(() => {
  testStartTime = new Date().getTime();
});

afterEach(() => {
  if (new Date().getTime() - testStartTime > testTimeoutInMs) {
    throw new Error(`Test took longer than ${testTimeoutInMs}ms!`);
  }
});

describe('Check if a number is prime', () => {

  test('977 is prime.', () => {
    expect(prime.primeNumberFast(977)).toBeTruthy();
    expect(prime.primeNumberSlow(977)).toBeTruthy();
  });

  test('1 is not prime.', () => {
    expect(prime.primeNumberFast(1)).toBeFalsy();
    expect(prime.primeNumberSlow(1)).toBeFalsy();
  });

  test('Check if large number is prime in time - Slower Version', () => {
    expect(prime.primeNumberSlow(2147483647)).toBeTruthy();
  }); 

  test('Check if large number is prime in time - Faster Version', () => {
    expect(prime.primeNumberFast(2147483647)).toBeTruthy();
  });
});