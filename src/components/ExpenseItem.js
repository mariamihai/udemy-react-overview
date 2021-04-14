import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2020, 3, 13);
  const expenseTile = "Car Insurance";
  const expenseAmount = 299.99;

  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTile}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
