import styles from "./UsersList.module.css";

import Card from "../../UI/Card/Card";

const UsersList = (props) => {
  const users = props.users.map((user) => {
    return (
      <li key={user.id}>
        {user.username} - {user.age}
      </li>
    );
  });

  return (
    <Card className={styles.users}>
      <ul>{users}</ul>
    </Card>
  );
};

export default UsersList;
