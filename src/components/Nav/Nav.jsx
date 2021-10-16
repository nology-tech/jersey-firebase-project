import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserContext";
const Nav = props => {
  const { user } = useContext(UserContext);
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

        <li>
          <Link to="/todo">Todo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
