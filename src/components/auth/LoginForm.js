import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../UI/Button";

import classes from "./LoginForm.module.css";

import AuthContext from "../context/auth-context";

const defaultData = {
  isEmployer: false,
  email: "",
  password: "",
};

function LoginForm() {
  const [formData, setFormData] = useState(defaultData);
  const authCtx = useContext(AuthContext);
  let navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    const expirationTime = new Date(new Date().getTime() + +20000 * 1000);

    authCtx.login(6, expirationTime.toISOString(), 3, "admin@admin.pl");

    return navigate("/offers");
  }

  function emailChangeHandler(event) {
    setFormData((lastState) => {
      return { ...lastState, email: event.target.value };
    });
  }

  function passwordChangeHandler(event) {
    setFormData((lastState) => {
      return { ...lastState, password: event.target.value };
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <h1> Login to get access to your account</h1>
        <div>
          <div className={classes.inputs}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={formData.email}
                onChange={emailChangeHandler}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={passwordChangeHandler}
              />
            </div>
          </div>
        </div>
        <div className={classes.links}>
          <Button className={classes.btn}>Log in</Button>
          <div>
            You have no account? <Link to="/register">Sign Up</Link>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default LoginForm;
