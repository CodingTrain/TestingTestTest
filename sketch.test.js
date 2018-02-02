const { sum, prod, subtract } = require('./sketch');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

test('adds 1 + 2 to equal 3', sumTest);

function sumTest() {
  expect(sum(1, 2)).toBe(3);
}


test('prod calculates 2 * 10 = 20', () => {
  expect(prod(2, 10)).toBe(20);
})

test('subtract calculates 50 - 8 = 43', () => {
  expect(subtract(50, 8)).toBe(43);
})