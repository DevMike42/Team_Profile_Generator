const Intern = require('../lib/Intern');

test('Can instantiate instance of an Employee', () => {
  const e = new Intern();
  expect(typeof (e)).toBe('object');
});