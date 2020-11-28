const Engineer = require('../lib/Engineer');

test('Can instantiate instance of an Employee', () => {
  const e = new Engineer();
  expect(typeof (e)).toBe('object');
});