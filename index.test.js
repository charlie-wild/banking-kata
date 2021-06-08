const { sum, deposit, withdraw, queryBalance, resetBalance } = require('./index.js');


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('when 50 is deposited, the total balance is 50', () => {
    deposit(50);
    expect(queryBalance()).toBe(50);
    resetBalance();

})

test('when 50 is deposited, then 20 is withdraw, the totalBalance is 30', () => {
    deposit(50);
    withdraw(20);
    expect(queryBalance()).toBe(30);
    resetBalance();
})

