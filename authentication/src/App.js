import { useContext } from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        {!authCtx.isLoggedIn &&
          <Route path="/auth" exact>
            <AuthPage />
          </Route>
        }

        { authCtx.isLoggedIn &&
          <Route path="/profile" exact>
            <ProfilePage />
          </Route>
        }

        {/* <Route path="/profile" exact>
            { authCtx.isLoggedIn && <ProfilePage />}
            { !authCtx.isLoggedIn && <Redirect to='/' />}
        </Route> */}

        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
