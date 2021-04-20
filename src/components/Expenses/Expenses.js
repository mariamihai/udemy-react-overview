import { useState } from "react";

import Card from "../UI/Card/Card";

import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

import "./Expenses.css";

function Expenses(props) {
  const [year, setYear] = useState("2020");

  /* filterChangeHandler */
  const updateFilterYearHandler = (event) => {
    setYear(event.target.value);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  var expensesContent = <p>No expenses found.</p>;
  if (filteredExpenses.length !== 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={year}
        onUpdateFilterYear={updateFilterYearHandler}
      />
      {expensesContent}
    </Card>
  );
}

export default Expenses;
