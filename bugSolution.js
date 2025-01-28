function foo(a, b) {
  // Handle undefined or null values
  a = a === undefined ? 0 : a; 
  b = b === undefined ? 0 : b;  
  return a + b;
}

console.log(foo(undefined, 1)); // 1
console.log(foo(null, 1)); // 1
console.log(foo(2,3)) //5