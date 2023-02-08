const doAdd = require('../../src/mock-add');

test("calls callback with arguments added", () => {
  const mockCallback = jest.fn(); /// Creating the object
  doAdd(1, 2, mockCallback); 
  expect(mockCallback).toHaveBeenCalledWith(3); 
});