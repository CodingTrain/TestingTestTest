function sum(a, b) {
  return a + b;
}

function prod(a, b) {
  return a * b;
}

function divide(a, b){
  // NEURAL NETWORK PLEASE :)
  if(b!=0) return a/b;
  else return "Error";
}


module.exports = {
  sum: sum,
  prod: prod,
  div: divide
}
