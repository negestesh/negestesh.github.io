class Bank {
  constructor(accounts) {
    this._accounts = accounts;
  }

  static nextNumber = 1000;

  addAccount() {
    const account = new Account(Bank.nextNumber);
    Bank.nextNumber++;
    this._accounts.push(account);
    return account.getNumber();
  }
  addSavingsAccount(interest) {
    const account = new SavingsAccount(Bank.nextNumber, interest);
    Bank.nextNumber++;
    this._accounts.push(account);
    return account.getNumber();
  }
  addCheckingAccount(overdraft) {
    const account = new CheckingAccount(Bank.nextNumber, overdraft);
    Bank.nextNumber++;
    this._accounts.push(account);
    return account.getNumber();
  }
  accountReport() {
    if (this._accounts.length === 0) {
      throw new Error('Nothing to report');
    } else {
      let report = '';
      for (let i = 0; i < this._accounts.length; i++) {
        report += `Account: 
        ${this._accounts[i].getNumber()} 
        Balance: ${this._accounts[i].getBalance()} \n`;
      }
      return report;
    }
  }
  closeAccount(number) {
    let closedAccount = null;
    for (let i = 0; i < this._accounts.length; i++) {
      if (this._accounts[i].getNumber() === number) {
        closedAccount = this._accounts[i];
        this._accounts[i] = null;
      }
    }
    return closedAccount;
  }
  endOfMonth() {
    let response = '';
    for (let i = 0; i < this._accounts.length; i++) {
      response += this._accounts[i].endOfMonth();
    }
    return response;
  }
}
