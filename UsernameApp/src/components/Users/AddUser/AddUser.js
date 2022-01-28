import { useState, useRef } from "react";

import styles from "./AddUser.module.css";

import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErroModal";

const AddUser = (props) => {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid username and age (non-empty values)",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (positive value)",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);

    usernameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={usernameInputRef} />

          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />

          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
