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