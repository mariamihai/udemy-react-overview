import { useState } from "react";

import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  /* isEditing */
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString()
    };
    setShowForm(false);

    props.onAddExpenseData(expenseData);
  };

  const showFormHandler = () => {
    setShowForm((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClick={showFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
