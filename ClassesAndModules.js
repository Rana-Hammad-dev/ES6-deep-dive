// Exercise 1 — build a BankAccount class
// Create a BankAccount class with owner, balance, deposit(), withdraw(), and getBalance(). Prevent balance from going below 0.
class BankAccount {
    constructor(owner, initialBalance) {
        this.owner = owner;
        this.initialBalance = initialBalance;
    }
    deposit(amount) {
        return this.initialBalance += amount;
    }
    withdraw(amount) {
        return this.initialBalance -= amount
    }
    getBalance() {
        return this.initialBalance;
    }
}
const acc = new BankAccount("Sara", 5000);
acc.deposit(2000);
acc.withdraw(1000);
// console.log(acc.getBalance()); // 6000


// Exercise 2 — extend with SavingsAccount
// Create SavingsAccount that extends BankAccount and adds an addInterest(rate) method that adds percentage interest to the balance.
class SavingsAccount extends BankAccount {
    addInterest(rate) {
        return this.initialBalance = this.initialBalance * 1.1;
    }
}
const sav = new SavingsAccount("Ahmed", 10000);
sav.addInterest(10); // adds 10% = 1000
console.log(sav.getBalance()); // 11000
