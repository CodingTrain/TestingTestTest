function sum(a, b) {
  return a + b;
}

function sayHelloTo(username){
  return "Hello, " + username + "!";
}

function prod(a, b) {
  return a * b;
}

module.exports = {
  sum: sum,
  prod: prod,
  hello: sayHelloTo
}
