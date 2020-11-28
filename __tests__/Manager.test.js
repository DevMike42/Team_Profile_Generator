const Manager = require('../lib/Manager');

test('Can instantiate instance of an Employee', () => {
  const e = new Manager();
  expect(typeof (e)).toBe('object');
});

test('Can set office number via constructor argument', () => {
  const testValue = 100;
  const e = new Manager('Rick Sanchez', 137, 'burp@examples.com', testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});

test('getRole() shoudl return \"Manager\"', () => {
  const testValue = 'Manager';
  const e = new Manager('Rick Sanchez', 137, 'burp@examples.com', 100);
  expect(e.getRole()).toBe(testValue);
});

test('Can get office number vie getOffice()', () => {
  const testValue = 100;
  const e = new Manager('Rick Sanchez', 137, 'burp@examples.com', testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});