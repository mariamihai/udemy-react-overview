import "./ExpensesList.css";

import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0)
    return <p className="expenses-list__fallback">No expenses found.</p>;

  const expensesContent = props.filteredExpenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      date={expense.date}
      amount={expense.amount}
    />
  ));

  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;
