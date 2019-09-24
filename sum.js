function sum(a, b) {
  return a + b;
}

// a function that doesn't get tested so Jest makes you aware that not every function is tested
function helper() {
  console.log("Helper");
}

module.exports = sum;
