let accountBalance = 0;
let transactionHistory = [];


function sum(a, b) {
    return a + b;
}

function deposit(amount) {
    accountBalance += amount;
    transactionHistory.push(new Date().toLocaleDateString('en-GB') + " || " + amount + " || " + accountBalance);

}

function withdraw(amount) {
    accountBalance -= amount;
    transactionHistory.push(new Date().toLocaleDateString('en-GB') + " || -" + amount + " || " + accountBalance);

}

function printStatement() {
    console.log("Date || Amount || Balance")
    for (let i = 0; i < transactionHistory.length; i++) {
        console.log(transactionHistory[i]);
    }
}

function queryBalance() {
    return accountBalance;
}

function resetBalance() {
    accountBalance = 0;
}




module.exports = {
    sum, deposit, withdraw, printStatement, queryBalance, resetBalance
};