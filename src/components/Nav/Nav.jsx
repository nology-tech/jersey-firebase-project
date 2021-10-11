import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  const { user } = props;
  return (
    <nav>
      {user && <p>{user.displayName}</p>}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
