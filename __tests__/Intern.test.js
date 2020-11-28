const Intern = require('../lib/Intern');

test('Can instantiate instance of an Employee', () => {
  const e = new Intern();
  expect(typeof (e)).toBe('object');
});

test("Can set school via constructor", () => {
  const testValue = "Herpson High";
  const e = new Intern("Morty Smith", 137, "ohgeez@examples.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Morty Smith", 137, "ohgeez@examples.com", "Herpson High");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Herpson High";
  const e = new Intern("Morty Smith", 137, "ohgeez@examples.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});