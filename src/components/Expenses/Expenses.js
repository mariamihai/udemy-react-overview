import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

import "./Expenses.css";

function Expenses(props) {
  const listOfExpenses = props.expenses.map((expense) => (
    <ExpenseItem key={expense.id}
      title={expense.title}
      date={expense.date}
      amount={expense.amount}
    />
  ));

  return <Card className="expenses">{listOfExpenses}</Card>;
}

export default Expenses;