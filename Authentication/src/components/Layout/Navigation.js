import {useContext} from "react";

import {Link} from "react-router-dom";
import AuthContext from "../../store/auth-context";

import styles from "./Navigation.module.css";

const Navigation = () => {
    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;

    const logoutHandler = () => {
      authCtx.logout();
      // optional: redirect the user to the login page
    }

    return (<header className={styles.header}>
        <Link to="/">
            <div className={
                styles.logo
            }>React Auth</div>
        </Link>
        <nav>
            <ul> 
              { !isLoggedIn && 
                <li>
                    <Link to="/auth">Login</Link>
                </li>
              }
              
              {isLoggedIn &&

                <li>
                    <Link to="/profile">Profile</Link>
                </li>
              }

              {isLoggedIn &&
                <li>
                    <button onClick={logoutHandler}>Logout</button>
                </li>
              }
            </ul>
        </nav>
    </header>);
};

export default Navigation;
