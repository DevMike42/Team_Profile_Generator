const Manager = require('../lib/Manager');

test('Can instantiate instance of an Employee', () => {
  const e = new Manager();
  expect(typeof (e)).toBe('object');
});