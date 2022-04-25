import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";

export const Routes = () => {

  const [userAuth, setUserAuth] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Kenziehub:token"));

    if (token) {
      return setUserAuth(true);
    }
  }, [userAuth]);

  return (
    <Switch>
      <Route exact path="/">
        <Home userAuth={userAuth} />
      </Route>
      <Route path="/signup">
        <Signup userAuth={userAuth} />
      </Route>
      <Route path="/login">
        <Login userAuth={userAuth} setUserAuth={setUserAuth} />
      </Route>
      <Route path="/dashboard">
        <Dashboard userAuth={userAuth} setUserAuth={setUserAuth} />
      </Route>
    </Switch>
  );
};