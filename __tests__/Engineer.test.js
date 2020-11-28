const Engineer = require('../lib/Engineer');

test('Can instantiate instance of an Employee', () => {
  const e = new Engineer();
  expect(typeof (e)).toBe('object');
});

test("Can set GitHUb account via constructor", () => {
  const testValue = "MortyC137";
  const e = new Engineer("Morty Smith", 137, "ohgeez@examples.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Morty Smith", 137, "ohgeez@examples.com", "MortyC137");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "MortyC137";
  const e = new Engineer("Morty Smith", 137, "ohgeez@examples.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});