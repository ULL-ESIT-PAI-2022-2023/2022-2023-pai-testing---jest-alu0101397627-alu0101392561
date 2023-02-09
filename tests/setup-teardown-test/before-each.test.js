const ListClass = require('../../src/setup.teardown'); /// Importing the class

let list = new ListClass;
beforeEach(() => { /// Repeats before every test
  list.insert('apples');
  list.insert('pears');
});

afterEach(() => { /// Repeats before every test
  list.reset();
});

test('The list contains apples and pears', () => {
  expect(list.getList()).toStrictEqual(['apples','pears']);
});