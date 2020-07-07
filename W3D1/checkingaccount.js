class CheckingAccount extends Account {
  constructor(number, overdraftlimit) {
    super(number);
    this._overDraftLimit = overdraftlimit;
  }

  getOverDraftLimit() {
    return this._overDraftLimit;
  }

  setOverDraftLimit(overdraftlimit) {
    this._overDraftLimit = overdraftlimit;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new RangeError('Withdraw amount has to be greater than zero');
    }
    if (this._balance - amount < this._overdraftlimit) {
      throw Error(
        `Withdrawal exceeds overdraft limit: current balance ${this._balance}: overdraft limit ${this._overDraftLimit}`
      );
    }
    this._balance -= amount;
  }

  toString() {
    return `Account ${this._number}: balance ${this._balance}`;
  }
  endOfMonth() {
    let response = '';
    if (this._balance < 0) {
      response = `Warning, low balance CheckingAccount ${this._number}:
      balance: ${this._balance} overdraft limit: ${this._overDraftLimit} \n`;
    } else {
      response = `CheckingAccount ${this._number}:
      balance: ${this._balance} overdraft limit: ${this._overDraftLimit} \n`;
    }
    return response;
  }
}
