// To use this, you're gonna have to create functions with multiple parameters and send them to this one as parameters.
// Some example functions have been provided below, remove comments and run this file to see results.
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

// Examples.
// Some functions with different amounts of parameters as examples for the above function.
function get_self(x) {
  return x;
}
function multiply(x,y) {
  return x*y;
}
function add_three_nums(x,y,z) {
  return x+y+z;
}

// Using the memoize function with different functions with different parameter amounts.
// mem_get_self = memoize(get_self)
// console.log(mem_get_self(3))
// mem_multiply = memoize(multiply)
// console.log(mem_multiply(10,20))
// mem_add_three_nums = memoize(add_three_nums)
// console.log(mem_add_three_nums(30,31,32))
