test("returns undefined by default", () => {
  const mock = jest.fn(); /// Basic form of create a mock object
  let result = mock('foo');
  expect(mock).toHaveBeenCalled(); /// Ensure that the mock function has been called
  expect(mock).toHaveBeenCalledTimes(1); /// Ensure that the mock function has been called 1 time 
  expect(mock).toHaveBeenCalledWith('foo'); /// Ensure that the mock function has been called with a "foo" value
});