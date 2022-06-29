import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./RegisterForm.module.css";
import api from "../../api/api";
import Button from "../UI/Button";
import ErrorMessageForm from "../UI/ErrorMessageForm";

const defaultData = {
  email: { value: "", isEmpty: true },
  password: { value: "", isEmpty: true },
  repeatPassword: { value: "", isEmpty: true },
  companyName: { value: "", isEmpty: true },
};

const defaultError = {
  email: false,
  password: false,
  repeatPassword: false,
  companyName: false,
};

function RegisterForm() {
  const [isEmployer, setIsEmployer] = useState(false);
  const [formData, setFormData] = useState(defaultData);
  const [showError, setShowError] = useState(defaultError);
  const [errorApi, setErrorApi] = useState(false);

  let navigate = useNavigate();

  function accountTypeHandler(event) {
    const chceckIsEmployer = event.target.value === "company" ? true : false;
    setIsEmployer(chceckIsEmployer);
    setShowError({
      email: false,
      password: false,
      repeatPassword: false,
      companyName: false,
    });
  }

  function inputChangeHandler(event) {
    setFormData(() => {
      return {
        ...formData,
        [event.target.name]: {
          value: event.target.value,
          isEmpty: checkIsEmpty(event.target.value),
        },
      };
    });
    setShowError({
      email: false,
      password: false,
      repeatPassword: false,
      companyName: false,
    });
  }

  async function submitHandler(event) {
    event.preventDefault();

    if (validation()) return;

    const data = await api.registration({
      email: formData.email.value,
      password: formData.password.value,
      companyName: formData.companyName.value,
    });

    if (data.hasOwnProperty("error")) {
      setErrorApi(true);
      return;
    }

    await api.createProfile(formData.email.value);

    return navigate("/login");
  }

  function checkIsEmpty(value) {
    return value === "";
  }

  const checkPassword = (str) => {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
  };

  function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function validation() {
    const errorObj = {
      email: false,
      password: false,
      repeatPassword: false,
      companyName: false,
    };
    console.log(validateEmail("adam@wp.pl"));

    if (isEmployer && formData.companyName.value.length < 2)
      errorObj.companyName = true;
    if (!validateEmail(formData.email.value)) errorObj.email = true;
    if (!checkPassword(formData.password.value)) errorObj.password = true;
    if (formData.password.value !== formData.repeatPassword.value)
      errorObj.repeatPassword = true;

    console.log(errorObj);
    setShowError(errorObj);

    for (let i of Object.values(errorObj)) {
      if (i) return true;
    }
    return false;
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
            {isEmployer && (
              <div>
                <label htmlFor="companyname">Company name</label>
                <input
                  name="companyName"
                  type="text"
                  id="companyname"
                  value={formData.companyName.value}
                  onChange={inputChangeHandler}
                />
                {showError.companyName && (
                  <ErrorMessageForm message="Company name should have at least 2 characters." />
                )}
              </div>
            )}
            <div>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="text"
                id="email"
                value={formData.email.value}
                onChange={inputChangeHandler}
              />
              {showError.email && (
                <ErrorMessageForm message="Email adress is not valid." />
              )}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                id="password"
                value={formData.password.value}
                onChange={inputChangeHandler}
              />
              {showError.password && (
                <ErrorMessageForm message="Password should have min 8 letters, with at least a symbol, upper and lower case letters and a number." />
              )}
            </div>
            <div>
              <label htmlFor="repeatPassword">Repeat password</label>
              <input
                name="repeatPassword"
                type="password"
                id="repeatPassword"
                value={formData.repeatPassword.value}
                onChange={inputChangeHandler}
              />
              {showError.repeatPassword && (
                <ErrorMessageForm message="Passwords doesn't match." />
              )}
            </div>
          </div>
        </div>
        <div className={classes.links}>
          <Button className={classes.btn}>Sign Up</Button>
          <div>
            Do you have account? <Link to="/login">Login</Link>
            {errorApi &&
              (isEmployer ? (
                <ErrorMessageForm message="Given email and / or company name exists." />
              ) : (
                <ErrorMessageForm message="Given email exists." />
              ))}
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default RegisterForm;
