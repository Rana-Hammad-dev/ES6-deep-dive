// differnce between var and let in a loop with setTimeout

for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 100);
}
for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 100);
}
// Fix it using let — then explain the difference in a comment
// basically, var using one box to store the all value of i,so when the loop finishes, i is 5, and all the setTimeout callbacks will log 5.
// using let, it creates a new block scope for each iteration of the loop, so each setTimeout callback will log the correct value of i at the time it was created.


// difference between explicit and implicit return in arrow functions
// Explicit return (normal)
const add = (a, b) => {
    return a + b;
}

// Implicit return (shortcut)
const add = (a, b) => a + b;

// More examples:
const square = x => x * x;
const greeting = name => "Hello " + name;
const isAdult = age => age >= 18;

console.log(add(2, 3));      // 5
console.log(square(4));      // 16
console.log(isAdult(20));    // true

// If you implicitly return an object, wrap it in ( ) otherwise JS gets confused:
//  BROKEN — JS thinks {} is a code block
const getUser = () => { name: "Ali", age: 22 };

//  FIXED — wrap object in ()
const getUser = () => ({ name: "Ali", age: 22 });

console.log(getUser()); // { name: 'Ali', age: 22 }

// Rewrite all three functions as arrow functions. Which one behaves differently with `this`?
const double = function (n) { return n * 2; }
const greet = function (name) { return "Hello " + name; }
const square = function (n) { return n * n; }

const double = n => n * 2;
const greet = name => "hello" + name;
const square = n => n * n;

const calc = {
    add: (a, b) =>
        a + b
};
console.log(calc.add(5, 3)); // 8

