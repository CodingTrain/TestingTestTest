function sum(a, b) {
	return a + b;
}

function prod(a, b) {
	return a * b;
}

function gcd(a, b) {
	console.log(a, b);
	return b == 0 ? a : gcd(b, a % b);
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
