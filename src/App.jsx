import "./App.css";

import Nav from "./components/Nav/Nav";
import Routes from "./containers/Routes/Routes";

import { BrowserRouter as Router } from "react-router-dom";

import { useEffect, useState } from "react";

import UserProvider from "./context/UserContext/UserContext";

const App = () => {
  // const [user, setUser] = useState(null);

  // const handleLogin = () => {
  //   signInWithRedirect(auth, provider);
  // };

  // const handleLogout = () => {
  //   signOut(auth)
  // };

  // useEffect(() => {
  //   onAuthStateChanged(auth, authenticatedUser => {
  //     if (authenticatedUser) {
  //       setUser(authenticatedUser);
  //     } else {
  //       setUser(null);
  //     }
  //   });
  // }, []);

  return (
    <Router>
      <UserProvider>
        <Nav />
        <Routes />
      </UserProvider>
    </Router>
  );
};

export default App;
