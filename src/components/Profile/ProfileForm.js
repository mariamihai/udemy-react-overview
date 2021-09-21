import {useRef, useContext} from 'react';
import AuthContext from "../../store/auth-context";


import styles from "./ProfileForm.module.css";

const ProfileForm = () => {
    const API_KEY = 'AIzaSyA47fW2eTqlUQnwERpm3hjG6RhGHyir3Qs';
    
    const authCtx = useContext(AuthContext);

    const newPasswordInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const eneteredNewPassword = newPasswordInputRef.current.value;

        // Add validation

        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=' + API_KEY;
 
        fetch(url, {
            method: "POST",
            body: JSON.stringify(
              {
                  idToken : authCtx.token,
                  password: eneteredNewPassword,
                  returnSecureToken: true
              }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return response.json().then((data) => {
                    let errorMessage = "Change password failed";

                    throw new Error(errorMessage);
                });
            }
        }).then((data) => {
            console.log(data);
            authCtx.login(data.idToken);
        }).catch((error) => {
            // Can show a message based on the error received
            // if (data && data.error && data.error.message) {
            // errorMessage = data.error.message;
            // }

            // Maybe set state, show a modal with the error message
            alert(error.message);
        });
    }

    return (<form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
            <label htmlFor="new-password">New password</label>
            <input type="password" id="new-password" minLength="7"
                ref={newPasswordInputRef}/>
        </div>

        <div className={styles.action}>
            <button>Change password</button>
        </div>
    </form>);
};

export default ProfileForm;
