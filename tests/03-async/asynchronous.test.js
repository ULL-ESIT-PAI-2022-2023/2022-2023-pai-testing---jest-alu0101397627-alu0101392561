const apiExample = require('../../src/asynchronous');
const dataExample = {PAI: '2022-2023'};

test('API Example 1', () => {
  return apiExample().then(data => {
    expect(data).toEqual(dataExample);
  });
});

test('API Example 2 - async function', async () => {
  const data = await apiExample();
  expect(data).toEqual(dataExample);
})

test('API Example 3 - resolves', async () => {
  await expect(apiExample()).resolves.toEqual(dataExample);
})