// Synchronous
console.log("first");
console.log("second");
console.log("third");
// Result: first, second, third

// Asynchronous
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");
// Result: 1, 3, 2

// To much nesting call-back is call-back hell