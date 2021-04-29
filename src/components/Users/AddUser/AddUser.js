import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" styles={styles.input} />

      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number" styles={styles.input} />

      <button type="submit">Add user</button>
    </form>
  );
};

export default AddUser;
