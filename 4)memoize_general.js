// High order function that accepts another function and memoizes it.
// The accepted function can have multiple parameters.
function memoize(f) {
  // Create the cache.
  const cache = {};
    // The momoized function, can have multiple parameters.
  return function memoized(...args) {
    // Create unique identifier based on the function and the parameters.
    const identifier  = JSON.stringify(args);
      // If the identifier is in the cache return the result.
    if (identifier  in cache) {
      return cache[identifier ];
    }
     // Otherwise, calculate it.
    return (cache[identifier ] = f(...args));
  };
}

