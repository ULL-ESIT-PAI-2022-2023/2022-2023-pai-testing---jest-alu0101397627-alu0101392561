const ListClass = require('../../src/setup-teardown'); /// Importing the class
let list = new ListClass;

beforeAll(() => { /// Only use one time
  list.insert('bananas');
  list.insert('apples');
  list.insert('tomatoes');
});

afterAll(() => { /// Only use one time
  list.reset();
});

describe('BeforeAll and AfterAll examples', () => {
  test('The list contains bananas, apples and tomatoes', () => {
    expect(list.getList()).toStrictEqual(['bananas','apples','tomatoes']);
  });
  
  test('The list contains bananas, apples and tomatoes', () => {
    expect(list.getList()).toStrictEqual(['bananas','apples','tomatoes']);
  });
})