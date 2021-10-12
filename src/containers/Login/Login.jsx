import React from "react";

const Login = props => {
  const { handleLogin, handleLogout } = props;

  return (
    <section>
      <h2>Please Login to continue</h2>
      <button onClick={handleLogin}>Log in</button>
      <button onClick={handleLogout}>Log out</button>
    </section>
  );
};

export default Login;
