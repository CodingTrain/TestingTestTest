const {sum, prod, digital_root, sum42, gcd} = require('./sketch');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

test('adds 1 + 2 to equal 3', sumTest);

function sumTest() {
    expect(sum(1, 2)).toBe(3);
}

function helloTest() {
    expect(sayHelloTo("Dan")).toBe("Hello, Dan!");
}

test('GCD of 40 and 20', gcdSimpleTest);

function gcdSimpleTest() {
    expect(gcd(20, 40)).toBe(20);
}