import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

import classes from "./RegisterForm.module.css";

const defaultData = {
  isEmployer: false,
  email: "",
  password: "",
  companyName: "",
};

function RegisterForm() {
  const [formData, setFormData] = useState(defaultData);

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
