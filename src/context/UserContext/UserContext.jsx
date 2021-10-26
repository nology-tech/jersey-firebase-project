import React, { useState, createContext, useEffect } from "react";
import { provider, auth } from "../../firebase";
import { signInWithRedirect, onAuthStateChanged, signOut } from "firebase/auth";

export const UserContext = createContext({});

const UserProvider = props => {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    signInWithRedirect(auth, provider);
  };

  const handleLogout = () => {
    signOut(auth);
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

  const userContext = {
    user,
    handleLogin,
    handleLogout,
    message: "hello from the context"
  };

  return <UserContext.Provider value={userContext}>{props.children}</UserContext.Provider>;
};

export default UserProvider;
