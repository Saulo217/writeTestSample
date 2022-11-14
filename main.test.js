const { sum, helloName } = require('./main');

test('adds 1 to 2 expect to be 3', () => {
  expect(sum(1,2)).toBe(3);
});

test('change name to a string on phrase "Hello name!"', () => {
  expect(helloName("Renan")).toBe("Hello Renan!");
});
