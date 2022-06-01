import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../UI/Button";

import classes from "./RegisterForm.module.css";

import AuthContext from "../context/auth-context";

const defaultData = {
  isEmployer: false,
  email: "",
  password: "",
  companyName: "",
};

function RegisterForm() {
  const [formData, setFormData] = useState(defaultData);

  let navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  function accountTypeHandler(event) {
    if (event.target.value === "student") {
      setFormData((lastState) => {
        return { ...lastState, isEmployer: false, companyName: "" };
      });
    } else if (event.target.value === "company") {
      setFormData((lastState) => {
        return { ...lastState, isEmployer: true };
      });
    }
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

  function companyNameChangeHandler(event) {
    setFormData((lastState) => {
      return { ...lastState, companyName: event.target.value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    const expirationTime = new Date(new Date().getTime() + +20000 * 1000);

    if (!formData.isEmployer)
      authCtx.login(5, expirationTime.toISOString(), 1, "user@edu.ul.pl");
    else
      authCtx.login(
        4,
        expirationTime.toISOString(),
        2,
        "pracodawca@fujutsuake.pl"
      );

    //authCtx.login(5224, 20000, 2, "pracodawcaa@fujutsuake.pl");

    return navigate("/offers");
  }

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <h1>Create your account and join our group</h1>
        <div>
          <div className={classes.radio}>
            <div>
              <input
                type="radio"
                name="accountType"
                id="student"
                value="student"
                onClick={accountTypeHandler}
                defaultChecked
              />
              <label htmlFor="student">Student</label>
            </div>
            <div>
              <input
                type="radio"
                name="accountType"
                id="company"
                value="company"
                onClick={accountTypeHandler}
              />
              <label htmlFor="student">Company</label>
            </div>
          </div>
          <div className={classes.inputs}>
            {formData.isEmployer && (
              <div>
                <label htmlFor="companyname">Company name</label>
                <input
                  type="text"
                  id="companyname"
                  value={formData.companyName}
                  onChange={companyNameChangeHandler}
                />
              </div>
            )}
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
          <Button className={classes.btn}>Sign Up</Button>
          <div>
            Do you have account? <Link to="/login">Login</Link>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default RegisterForm;
