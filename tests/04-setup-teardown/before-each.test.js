const ListClass = require('../../src/setup-teardown'); /// Importing the class
let list = new ListClass;

beforeEach(() => { /// Only use one time
  list.insert('bananas');
});

afterEach(() => { /// Only use one time
  list.insert('coco');
});

describe('BeforeAll and AfterAll examples', () => {
  test('The list contains bananas, apples and tomatoes', () => {
    expect(list.getList()).toStrictEqual(['bananas']);
  });
  
  test('The list contains bananas, apples and tomatoes', () => {
    expect(list.getList()).toStrictEqual(['bananas','coco','bananas']);
  });
})