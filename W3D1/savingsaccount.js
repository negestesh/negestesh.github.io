class SavingsAccount extends Account {
  constructor(number, interest) {
    super(number);
    this._interest = interest;
  }

  getInterest() {
    return this._interest;
  }

  setInterest(newInterestRate) {
    this._interest = newInterestRate;
  }

  addInterest() {
    this._balance += (this._balance * this._interest) / 100;
  }

  toString() {
    return `Account ${this._number}: balance ${this._balance}`;
  }
  endOfMonth() {
    this.addInterest();
    return `Interest added SavingsAccount ${this._number}: balance: ${this._balance} interest: ${this._interest} \n`;
  }
}
