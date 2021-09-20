import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/auth" exact>
          <AuthPage />
        </Route>

        <Route path="/profile" exact>
          <ProfilePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
