function sum(a, b) {
  return a + b;
}

function factorial(n) {
  if(n === 0) {
    return 1;
  }

  return n * (factorial(n - 1));
}


module.exports = {sum, factorial};