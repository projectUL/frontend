import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../UI/Button";

import classes from "./MainNavigation.module.css";

function MainNavigation(props) {
  let navigate = useNavigate();

  function userLogout() {
    props.authCtx.logout();
    return navigate("/");
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Logo</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/offers">Offers</Link>
          </li>
          <li>
            <Link to="/companies">Companies</Link>
          </li>
        </ul>
      </nav>
      <nav>
        {props.authCtx.accessLevel === 0 && (
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        )}
        {props.authCtx.accessLevel !== 0 && (
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Button onClick={userLogout}>Logout</Button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default MainNavigation;
