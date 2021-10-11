import "./App.css";

import Nav from "./components/Nav/Nav";
import Routes from "./containers/Routes/Routes";

import { BrowserRouter as Router } from "react-router-dom";
import { provider, auth } from "./firebase";
import { signInWithRedirect, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);
  const handleLogin = () => {
    signInWithRedirect(auth, provider);
  };

  const handleLogout = () => {
    signOut(auth)
  };

  useEffect(() => {
    onAuthStateChanged(auth, authenticatedUser => {
      if (authenticatedUser) {
        setUser(authenticatedUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <Router>
      <Nav user={user} />
      <Routes handleLogin={handleLogin} handleLogout={handleLogout} user={user} />
    </Router>
  );
};

export default App;
