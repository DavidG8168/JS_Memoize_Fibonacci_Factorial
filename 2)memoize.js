// High order function that accepts another function and memoizes it.
// The accepted function has a single parameter.
// To use this function, you're gonna need to create another function and sent it into it.
// INSPECT the html file and run the function from the console.
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