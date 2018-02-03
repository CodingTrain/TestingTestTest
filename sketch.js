function sum(a, b) {
  return a + b;
}

function prod(a, b) {
  return a * b;
}

function digital_root(n) {
  return (n-1)%9+1;
}


module.exports = {
  sum: sum,
  prod: prod,
  digital_root: digital_root
}
