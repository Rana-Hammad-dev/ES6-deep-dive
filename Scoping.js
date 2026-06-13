// Exercise 1 — counter factory
// Build a makeCounter() function that returns an object with increment, decrement, and getCount. Each counter is independent.
function makeCounter() {
    let count = 0;
    return {
        increment: () => count++,
        decrement: () => count--,
        getCount: () => count
    };
}
const c1 = makeCounter();
const c2 = makeCounter();
c1.increment(); c1.increment();
c2.increment(); c2.decrement();
// console.log(c1.getCount()); // 2
// console.log(c2.getCount()); // 0


// Exercise 2 — multiplier factory
// Write makeMultiplier(n) that returns a function. The returned function multiplies any number by n.
function makeMultiplier(n) {
    return function (number) {
        return number * n;
    };
};

const double = makeMultiplier(2);
const triple = makeMultiplier(3);
// console.log(double(5));  // 10
// console.log(triple(5));  // 15



// Exercise 3 — predict the output
// Before running this code, write down what you think it prints. Then run it. If you were wrong, understand why.
function outer() {
    let x = 10;
    function inner() {
        let y = 20;
        console.log(x + y);
    }
    return inner;
}
const fn = outer();
fn(); // what does this print and why?
// 30
// Answer:because inner function can save variable of outer function this is called closure where if outer function destroy after execution inner function still store the variable due to closure.