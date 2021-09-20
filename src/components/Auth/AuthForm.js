import { useState, useRef } from "react";

import styles from "./AuthForm.module.css";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // Add validation

    setIsLoading(true);

    if (isLogin) {
    } else {
      // TODO - remove API Key
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBMzuPemhGYshFs6j6omyiC6PvdHVxBbck",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response) => {
        setIsLoading(false);

        if (response.ok) {
          // Do smth...
        } else {
          return response.json().then((data) => {
            let errorMessage = "Authentication failed";

            // Can show a message based on the error received
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            // Maybe set state, show a modal with the error message
            alert(errorMessage);
          });
        }
      });
    }
  };

  return (
    <section className={styles.auth}>
      <h1>{isLogin ? "Login" : "Sign up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor="password">Your password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>

        <div className={styles.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create account"}</button>
          )}
          {isLoading && <p>Sending request</p>}

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
