function fibonacci(limit) {
  const result = [];

  function recurse(a, b) {
    if (a > limit) return;  // Stop when next number exceeds limit
    result.push(a);
    recurse(b, a + b); // Move to next numbers
  }

  recurse(0, 1); // Start the sequence
  return result;
}

console.log(fibonacci(50));
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]