class bankAccount {

    constructor() {
        this.accountBalance = 0;
        this.transactionHistory = [];
    }
    deposit(amount) {
        this.accountBalance += amount;
        this.transactionHistory.push(new Date().toLocaleDateString('en-GB') + " || " + amount + " || " + this.accountBalance);


    }
    withdraw(amount) {
        this.accountBalance -= amount;
        this.transactionHistory.push(new Date().toLocaleDateString('en-GB') + " || -" + amount + " || " + this.accountBalance);

    }
    printStatement() {
        console.log("Date || Amount || Balance")
        for (let i = 0; i < this.transactionHistory.length; i++) {
            console.log(this.transactionHistory[i]);
        }
    }
    queryBalance() {
        return this.accountBalance;
    }
}


function sum(a, b) {
    return a + b;
}


module.exports = {
    sum, bankAccount
};