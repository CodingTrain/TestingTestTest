const { sum, prod } = require('./sketch');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

test('adds 1 + 5 to equal 999', sumTest);

function sumTest() {
  expect(sum(1, 5)).toBe(999);
}


test('prod calculates 2 * 10 = 20', () => {
  expect(prod(2, 10)).toBe(20);
})
