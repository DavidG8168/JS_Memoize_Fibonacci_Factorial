// To run this function just call it with a number as a parameter. Examples below.
// Either remove the comments from the examples and run this file directly or
// INSPECT the html file and run the function from the console.
// Caclulates factorial using memoization.
var factorial = (function() {
  // Create the cache.
  var cache = {};
  function f(n) {
    var value;
    // If in the cache, return the value.
    if (n in cache) {
      value = cache[n];
    }
    else {
      // If 0 or 1, return them.
      if (n === 0 || n === 1)
        value = 1;
      // Recursively call the function.
      else {
        value = n*f(n - 1);
      }
      // Update the cache.
      cache[n] = value;
    }
    return value;
  }
  return f;
})();

// Examples.
// console.log(factorial(80));
// console.log(factorial(90));
// console.log(factorial(100));