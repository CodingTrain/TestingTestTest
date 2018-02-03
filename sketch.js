function sum(a, b) {
	return a + b;
}

function prod(a, b) {
	return a * b;
}

function gcd(a, b) {
	return a === 0 ? b : ggt(a, a % b);
}

function lcm(a, b) {
	let gc = gcd(a, b);
	return (a * b) / gc;
}


module.exports = {
	sum: sum,
	prod: prod,
	lcm: lcm,
}
