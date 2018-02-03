const {
	sum,
	prod
} = require('./sketch');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

test('adds several numbers', sumTest);

function sumTest() {
	expect(sum(1, 2)).toBe(3);
	for (let i = 0; i <= 20; ++i) {
		for (let j = 0; j <= 20; ++j) {
			expect(sum(i, j)).toBe(i + j);
		}
	}
}


test('prod calculates 2 * 10 = 20', () => {
	expect(prod(2, 10)).toBe(20);
});

test('several largest common multiple tests', () => {
	let avals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	let bvals = [3, 4, 1, 6, 8, 9, 7, 10, 5, 2];
	//precalculated results
	let results = [];

	for (let i = 0; i < avals.length; i++) {
		expect(lcm(avals[i], bvals[i])).toBe(results[i]);
	}

});
