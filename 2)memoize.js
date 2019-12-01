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