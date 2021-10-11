import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";

const Routes = props => {
  const { handleLogin, user, handleLogout } = props;
  return (
    <Switch>
      <Route path="/login">
        <Login handleLogin={handleLogin} handleLogout={handleLogout}/>
      </Route>
      <Route path="/">
        <Home user={user} />
      </Route>
    </Switch>
  );
};

export default Routes;
