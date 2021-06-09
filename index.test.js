const { sum, bankAccount } = require('./index.js');


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('when 50 is deposited, the total balance is 50', () => {
    let testAccount = new bankAccount();
    testAccount.deposit(50);
    expect(testAccount.queryBalance()).toBe(50);

})

test('when 50 is deposited, then 20 is withdraw, the totalBalance is 30', () => {
    let testAccount = new bankAccount();
    testAccount.deposit(50);
    testAccount.withdraw(20);
    expect(testAccount.queryBalance()).toBe(30);
})

