import { useState } from "react";

import styles from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className={styles.auth}>
      <h1>{isLogin ? "Login" : "Sign up"}</h1>
      <form>
        <div className={styles.control}>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" required />
        </div>

        <div className={styles.control}>
          <label htmlFor="password">Your password</label>
          <input type="password" id="password" required />
        </div>

        <div className={styles.actions}>
          <button>{isLogin ? "Login" : "Create account"}</button>
          <button
            type="button"
            className={styles.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
