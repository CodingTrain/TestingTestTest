const { sum, factorial } = require('./sketch');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

test('adds 1 + 2 to equal 3', sumTest);

function sumTest() {
  expect(sum(1, 2)).toBe(3);
}

test('calculates 6!, which should be 720', factorialTest)

function factorialTest() {
  expect(factorial(6)).toBe(720);
}