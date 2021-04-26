import { useState } from "react";

import Button from "../../UI/Button/Button";

import "./CourseInput.css";

const CourseInput = (props) => {
  const [value, setValue] = useState("");
  //const [disabled, setDisabled] = useState(true);
  const [isValidInput, setIsValidInput] = useState(true);

  const inputChangedHandler = (event) => {
    setValue(event.target.value);

    if (event.target.value.trim().length > 0) {
      setIsValidInput(true);
    }
    //disableAddGoalForInvalidInput(event.target.value);
  };

  //const disableAddGoalForInvalidInput = (text) => {
  //  text.trim().length < 3 ? setDisabled(true) : setDisabled(false);
  //};

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddGoal(value);
    if (value.trim().length === 0) {
      setIsValidInput(false);
    }
    setValue("");
    //setDisabled(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: isValidInput ? "black" : "red" }}>
          Course Goal
        </label>
        <input
          style={{
            borderColor: isValidInput ? "black" : "red",
            background: isValidInput ? "transparent" : "salmon"
          }}
          type="text"
          value={value}
          onChange={inputChangedHandler}
        />
      </div>
      <Button type="submit" /*disabled={disabled}*/>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
