function sum(a, b) {
	return a + b;
}

function prod(a, b) {
	return a * b;
}


function lcm(a, b) {
	if (a > b) {
		let help = b;
		b = a;
		a = help;
	}
	return a % b == 0 ? b : lcm(b, a % b);
}


module.exports = {
	sum: sum,
	prod: prod,
	lcm: lcm,
}
