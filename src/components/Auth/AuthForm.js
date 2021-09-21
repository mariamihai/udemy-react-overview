import {useState, useRef, useContext} from "react";
import {useHistory} from 'react-router-dom';
import AuthContext from "../../store/auth-context";

import styles from "./AuthForm.module.css";

const AuthForm = () => {

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);
    const history = useHistory();

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const API_KEY = 'AIzaSyA47fW2eTqlUQnwERpm3hjG6RhGHyir3Qs';

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        let url;

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        // Add validation

        setIsLoading(true);

        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API_KEY;
            fetchCall(url, enteredEmail, enteredPassword, true);
        } else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY;
            fetchCall(url, enteredEmail, enteredPassword, true);

        }
    };

    const fetchCall = (url, enteredEmail, enteredPassword, returningSecureToken) => {
        fetch(url, {
            method: "POST",
            body: JSON.stringify(
                {email: enteredEmail, password: enteredPassword, returnSecureToken: returningSecureToken}
            ),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            setIsLoading(false);

            if (response.ok) { // Do smth...
                return response.json();
            } else {
                return response.json().then((data) => {
                    let errorMessage = "Login failed";

                    throw new Error(errorMessage);
                });
            }
        }).then((data) => {
            authCtx.login(data.idToken);
            history.replace('/');
        }).catch((error) => {
            // Can show a message based on the error received
            // if (data && data.error && data.error.message) {
            // errorMessage = data.error.message;
            // }

            // Maybe set state, show a modal with the error message
            alert(error.message);
        });

    }

    return (<section className={
        styles.auth
    }>
        <h1> {
            isLogin ? "Login" : "Sign up"
        }</h1>
        <form onSubmit={submitHandler}>
            <div className={
                styles.control
            }>
                <label htmlFor="email">Your email</label>
                <input type="email" id="email" required
                    ref={emailInputRef}/>
            </div>

            <div className={
                styles.control
            }>
                <label htmlFor="password">Your password</label>
                <input type="password" id="password" required
                    ref={passwordInputRef}/>
            </div>

            <div className={
                styles.actions
            }> {
                !isLoading && (<button> {
                    isLogin ? "Login" : "Create account"
                }</button>)
            }
                {
                isLoading && <p>Sending request</p>
            }

                <button type="button"
                    className={
                        styles.toggle
                    }
                    onClick={switchAuthModeHandler}> {
                    isLogin ? "Create new account" : "Login with existing account"
                } </button>
            </div>
        </form>
    </section>);
};

export default AuthForm;
