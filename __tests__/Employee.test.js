const Employee = require('../lib/Employee');

test('Can instantiate instance of an Employee', () => {
  const e = new Employee();
  expect(typeof (e)).toBe('object');
});

test('Can set name of Employee via constructor arguemnts', () => {
  const testValue = 'Rick Sanchez';
  const e = new Employee(testValue);
  expect(e.name).toBe(testValue);
});

test('Can set id of Employee via constructor arguemnts', () => {
  const testValue = 137;
  const e = new Employee('Rick Sanchez C-', testValue);
  expect(e.id).toBe(testValue);
});

test('Can set email of Employee via constructor arguemnts', () => {
  const testValue = 'wubbalubbadubdbu@examples.com';
  const e = new Employee('Rick Sanchez C-', 137, testValue);
  expect(e.email).toBe(testValue);
});

test('Can get name via getName()', () => {
  const testValue = 'Morty Smith';
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test('Can get id via getName()', () => {
  const testValue = 137;
  const e = new Employee('Morty Smith', testValue);
  expect(e.getId()).toBe(testValue);
});

test('Can get email via getName()', () => {
  const testValue = 'ohgeez@examples.com';
  const e = new Employee('Morty Smith', 137, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test('getRole() should return \"Employee\"', () => {
  const testValue = 'Employee';
  const e = new Employee('Summer Smith', 137, 'carpediems@examples.com');
  expect(e.getRole()).toBe(testValue);
});