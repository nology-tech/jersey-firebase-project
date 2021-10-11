import React from "react";

const Login = props => {
  const { handleLogin, handleLogout } = props;

  return (
    <div>
      <h2>Login works</h2>
      <button onClick={handleLogin}>Sign in</button>
      <button onClick={handleLogout}>Sign out</button>
    </div>
  );
};

export default Login;
