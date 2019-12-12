// To run this remove the comments from the examples and run this file.
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

// Use the memoized function and compare to original.
// console.log(factorial_memoized(50))
// console.log(factorial(50))
// console.log(factorial_memoized(400))
// console.log(factorial(400))
// console.log(factorial_memoized(30))
// console.log(factorial(30))
