import { useState } from "react";

import Button from "../../UI/Button/Button";

import styles from "./CourseInput.module.css";

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
      {/* <div className={`form-control ${!isValidInput ? "invalid" : ""}`}> */}
      <div className={`${styles["form-control"]} ${!isValidInput && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" value={value} onChange={inputChangedHandler} />
      </div>
      <Button type="submit" /*disabled={disabled}*/>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
