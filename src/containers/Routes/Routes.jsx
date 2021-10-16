import React , { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Todo from "../Todo/Todo";
import { UserContext } from "../../context/UserContext/UserContext";

const Routes = props => {
  const { handleLogin, user, handleLogout } = useContext(UserContext);
  // {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}

  const privateRoute = user ? "" : <Redirect to="/" />;

  return (
    <Switch>
      <Route path="/todo">
        <Todo />
      </Route>
      <Route path="/home">
        {privateRoute}
        <Home user={user} />
      </Route>
      <Route path="/">
        <Login handleLogin={handleLogin} handleLogout={handleLogout} />
      </Route>
    </Switch>
  );
};

export default Routes;
