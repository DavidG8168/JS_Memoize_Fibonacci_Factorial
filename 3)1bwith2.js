// High order function that accepts another function and memoizes it.
// The accepted function has a single parameter.
function memoize(f) {
  // Create the cache.
  const cache = {};
  // The momoized function, gets a single parameter.
  return function memoized(n) {
    // Create unique identifier based on the function and the parameter.
    const identifier = JSON.stringify(n);
    // If the identifier is in the cache return the result.
    if (identifier in cache) {
      return cache[identifier];
    }
    // Otherwise, calculate it.
    return (cache[identifier] = f(n));
  };
}


// Create the factorial normally, without memoization.
function factorial(n) {
  if (n == 0 || n == 1) {
    return 1
  }
  return n * factorial(n - 1)
}

// Get the memoized function.
factorial_memoized = memoize(factorial)

// Use the momoized function.
// console.log(factorial_memoized(5))
// console.log(factorial_memoized(4))
// console.log(factorial_memoized(3))
