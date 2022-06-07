import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import ErrorMessageForm from "../UI/ErrorMessageForm";

import classes from "./LoginForm.module.css";

import AuthContext from "../context/auth-context";

import api from "./../../api/api";

function LoginForm() {
  const [email, setEmail] = useState({ value: "", isEmpty: true });
  const [password, setPassword] = useState({ value: "", isEmpty: true });
  const [showError, setShowError] = useState(false);
  const [errorApi, setErrorApi] = useState(false);

  const authCtx = useContext(AuthContext);
  let navigate = useNavigate();

  async function submitHandler(event) {
    event.preventDefault();

    if (!validation()) {
      setShowError(true);
      return;
    }

    const data = await api.login(email, password);

    if (data.hasOwnProperty("error")) {
      setErrorApi(true);
      return;
    }

    const expirationTime = new Date(new Date().getTime() + +data.expiresIn * 1000);
    authCtx.login(data.token, expirationTime, data.accessLevel, data.email);

    return navigate("/offers");
  }

  function emailChangeHandler(event) {
    setEmail(() => {
      return { value: event.target.value, isEmpty: checkIsEmpty(event.target.value) };
    });
  }

  function passwordChangeHandler(event) {
    setPassword(() => {
      return { value: event.target.value, isEmpty: checkIsEmpty(event.target.value) };
    });
  }

  function checkIsEmpty(value) {
    return value === "";
  }

  function validation() {
    return email.isEmpty || password.isEmpty ? false : true;
  }

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <h1> Login to get access to your account</h1>
        <div>
          <div className={classes.inputs}>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" value={email.value} onChange={emailChangeHandler} />
              {showError && email.isEmpty && <ErrorMessageForm message="Fill in this field." />}
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password.value} onChange={passwordChangeHandler} />
              {showError && password.isEmpty && <ErrorMessageForm message="Fill in this field." />}
            </div>
          </div>
        </div>
        <div className={classes.links}>
          <Button className={classes.btn}>Log in</Button>
          <div>
            You have no account? <Link to="/register">Sign Up</Link>
            {errorApi && <ErrorMessageForm message="The given login and / or password are incorrect." />}
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default LoginForm;
