import "./Expenses.css";

import ExpenseItem from "../ExpenseItem/ExpenseItem";

function Expenses(props) {
  const listOfExpenses = props.expenses.map((expense) => (
    <ExpenseItem
      title={expense.title}
      date={expense.date}
      amount={expense.amount}
    />
  ));

  return <div className="expenses">{listOfExpenses}</div>;
}

export default Expenses;