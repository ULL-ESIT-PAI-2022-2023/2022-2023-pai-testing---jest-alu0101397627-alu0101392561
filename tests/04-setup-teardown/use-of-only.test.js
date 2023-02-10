const ListClass = require('../../src/setup.teardown'); /// Importing the class
let list = new ListClass;
beforeEach(() => { /// Repeats before every test
  list.insert('apples');
  list.insert('pears');
});

test.only('The list contains apples and pears', () => { /// if we add the key word 'only' despite of having another test
  console.log('I am the only test that will work'); /// this will be the only one that it's going to start
  expect(list.getList()).toEqual(['apples','pears']);
});

test('this test will not run', () => {
  console.log('I will fail, unless you put the keyword: \'only\', in the one above me');
  expect(list.getList()).toEqual(['apples']);
});