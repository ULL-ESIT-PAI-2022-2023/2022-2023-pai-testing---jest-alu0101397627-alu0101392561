const ListClass = require('../../src/setup-teardown'); /// Importing the class
let list1 = new ListClass;
let list2 = new ListClass;
beforeEach(() => { /// Applies for all the test on this file
  list1.insert('bananas');
  list1.insert('apples');
  list1.insert('tomatoes');
});

test('The list contains bananas, apples and tomatoes', () => {
  expect(list1.getList()).toStrictEqual(["bananas","apples","tomatoes"]);
});

describe('The list of school materials', () => {
  beforeEach(() => { /// Applies only for the tests on this describe block
    list2.insert('pencil');
    list2.insert('rubber');
    list2.insert('pen');
  });

  test('The list contains pencil, rubber and a pen', () => {
    expect(list2.getList()).toStrictEqual(["pencil","rubber","pen"]);
  });
});