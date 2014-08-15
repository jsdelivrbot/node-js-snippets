
function ExpenseItem(title, description, amount) {
    this.title = title;
    this.description = description;
    this.amount = amount;
}

ExpenseItem.prototype.isReasonable = function(){
  return this.amount < 100;
};