import { useState } from "react";

import Button from "../../UI/Button/Button";

import "./CourseInput.css";

const CourseInput = (props) => {
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(true);

  const inputChangedHandler = (event) => {
    setValue(event.target.value);

    disableAddGoalForInvalidInput(event.target.value);
  };

  const disableAddGoalForInvalidInput = (text) => {
    text.length < 3 ? setDisabled(true) : setDisabled(false);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddGoal(value);
    setValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" value={value} onChange={inputChangedHandler} />
      </div>
      <Button type="submit" disabled={disabled}>
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;
