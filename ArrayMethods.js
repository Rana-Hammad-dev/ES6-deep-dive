// Challenge 1 — map() ⭐ Easy

const prices = [100, 200, 300, 400, 500];

const AddingTax = prices.map(i => i * 1.1);
// console.log(AddingTax)// [110, 220, 330, 440, 550]



// Challenge 2 — filter() ⭐ Easy

const words = ["apple", "ai", "mango", "ant", "banana", "avocado"];

const aStartWith = words.filter(word => word.startsWith("a"));
// console.log(aStartWith);//["apple", "ai", "ant", "avocado"]


// Challenge 3 — reduce() ⭐⭐ Medium

const orders = [
    { product: "Phone", price: 50000, qty: 1 },
    { product: "Charger", price: 1500, qty: 2 },
    { product: "Case", price: 800, qty: 3 }
];

const totalBill = orders.reduce((acc, cur) => acc += cur.price * cur.qty, 0)
// console.log(totalBill)//55400


// Challenge 4 — find() ⭐ Easy

const users = [
    { id: 101, name: "Ali", active: true },
    { id: 102, name: "Sara", active: false },
    { id: 103, name: "Ahmed", active: true }
];

const user = users.find(user => user.id === 102);
// console.log(user)//{ id: 102, name: "Sara", active: false }



// Challenge 5 — some() & every() ⭐ Easy

const passwords = ["ali123", "sara", "ahmed@99", "x", "lahore2024"];

// Task 1: Check if some password is less than 5 characters
// Task 2: Check if every password has a number in it

const smallPassword = passwords.some(password => password.length <= 5)
// console.log(smallPassword)

const hasNumber = passwords.every(password => /\d/.test(password))
// console.log(hasNumber)



// Challenge 6 — Chaining ⭐⭐⭐ Hard

const employees = [
    { name: "Ali", dept: "IT", salary: 80000, experience: 3 },
    { name: "Sara", dept: "HR", salary: 60000, experience: 1 },
    { name: "Ahmed", dept: "IT", salary: 95000, experience: 5 },
    { name: "Umar", dept: "IT", salary: 45000, experience: 1 },
    { name: "Zara", dept: "Finance", salary: 70000, experience: 4 }
];

// Task: From IT department only, get employees with 2 + years experience, then return just their names with salary increased by 10 %

const emp = employees.filter(employee => employee.dept === "IT").filter(employee => employee.experience >= 2).map(employee => ({ salary: employee.salary * 1.1, name: employee.name }))
// console.log(emp)//{ ALi, 88000 }, { Ahmad, 104500 }


// Exercise 1 — product list challenge
// Given this products array: filter only items in stock, then map to get their names, then sort alphabetically.


const products = [
    { name: "Laptop", price: 80000, inStock: true },
    { name: "Phone", price: 45000, inStock: false },
    { name: "Tablet", price: 35000, inStock: true },
    { name: "Watch", price: 15000, inStock: true },
];
const result = products
    .filter(product => product.inStock == true)
    .map(product => product.name)
    .sort();
// console.log(result); // ["Laptop", "Tablet", "Watch"]



// Exercise 3 — group by category
// Use reduce() to group this array of expenses by category into an object.

const expenses = [
    { desc: "Rice", category: "food", amount: 500 },
    { desc: "Bus", category: "transport", amount: 100 },
    { desc: "Chai", category: "food", amount: 50 },
];

const foodExpense = expenses.filter(expense => expense.category == "food").reduce((acc, cur) => acc += cur.amount, 0)
const transportExpense = expenses.filter(expense => expense.category == "transport").reduce((acc, cur) => acc += cur.amount, 0)
const expenseBycatagory = { food: foodExpense, transport: transportExpense }
// console.log(expenseBycatagory)
// Expected: { food: 550, transport: 100 }