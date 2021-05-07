import styles from "./Header.module.css";

import mealsImage from "../../../assets/meals.jpg";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="A table of delicious food" />
      </div>
    </>
  );
};

export default Header;
