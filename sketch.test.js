const { sum, prod, digital_root } = require('./sketch');

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

test('digital root of 265 should equal 4', () => {
  expect(digital_root(265)).toBe(4);
})
