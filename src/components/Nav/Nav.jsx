import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  const { user } = props;
  return (
    <nav>
      <ul>
        {user && <li>{user.displayName}</li>}
        <li>
          <Link to="/home">Home</Link>
        </li>

       

        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
