import { useState } from "react";

import Card from "../UI/Card/Card";

import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesChart from './ExpensesChart/ExpensesChart';

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

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={year}
        onUpdateFilterYear={updateFilterYearHandler}
      />
      <ExpensesChart filteredExpenses={filteredExpenses} />
      <li>
        <ExpensesList filteredExpenses={filteredExpenses} />
      </li>
    </Card>
  );
}

export default Expenses;
