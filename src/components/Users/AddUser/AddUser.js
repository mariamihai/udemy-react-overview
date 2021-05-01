import { useState } from "react";

import styles from "./AddUser.module.css";

import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    if (+enteredAge < 1) {
      return;
    }

    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={enteredUsername}
          onChange={usernameChangeHandler}
          type="text"
        />

        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          value={enteredAge}
          onChange={ageChangeHandler}
          type="number"
        />

        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
