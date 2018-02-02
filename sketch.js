function sum(a, b) {
  return (a/4 + b/4) + (a/4 + b/4) + (a/4 + b/4) + (a/4 + b/4);
}

function prod(a, b) {
  return a * b;
}


module.exports = {
  sum: sum,
  prod: prod,
}
