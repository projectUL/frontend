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

function RegisterForm() {
  const [isEmployer, setIsEmployer] = useState(false);
  const [formData, setFormData] = useState(defaultData);
  const [showError, setShowError] = useState(false);
  const [errorApi, setErrorApi] = useState(false);

  let navigate = useNavigate();

  function accountTypeHandler(event) {
    const chceckIsEmployer = event.target.value === "company" ? true : false;
    setIsEmployer(chceckIsEmployer);
  }

  function inputChangeHandler(event) {
    setFormData(() => {
      return { ...formData, [event.target.name]: { value: event.target.value, isEmpty: checkIsEmpty(event.target.value) } };
    });
  }

  async function submitHandler(event) {
    event.preventDefault();

    if (!validation()) {
      setShowError(true);
      return;
    }

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

  function validation() {
    for (const key in formData) {
      if (!isEmployer && key === "companyName") continue;

      if (formData[key].isEmpty) return false;
    }
    return true;
  }
  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <h1>Create your account and join our group</h1>
        <div>
          <div className={classes.radio}>
            <div>
              <input type="radio" name="accountType" id="student" value="student" onClick={accountTypeHandler} defaultChecked />
              <label htmlFor="student">Student</label>
            </div>
            <div>
              <input type="radio" name="accountType" id="company" value="company" onClick={accountTypeHandler} />
              <label htmlFor="student">Company</label>
            </div>
          </div>
          <div className={classes.inputs}>
            {isEmployer && (
              <div>
                <label htmlFor="companyname">Company name</label>
                <input name="companyName" type="text" id="companyname" value={formData.companyName.value} onChange={inputChangeHandler} />
                {showError && formData.companyName.isEmpty && <ErrorMessageForm message="Fill in this field." />}
              </div>
            )}
            <div>
              <label htmlFor="email">Email</label>
              <input name="email" type="text" id="email" value={formData.email.value} onChange={inputChangeHandler} />
              {showError && formData.email.isEmpty && <ErrorMessageForm message="Fill in this field." />}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input name="password" type="password" id="password" value={formData.password.value} onChange={inputChangeHandler} />
              {showError && formData.password.isEmpty && <ErrorMessageForm message="Fill in this field." />}
            </div>
            <div>
              <label htmlFor="repeatPassword">Repeat password</label>
              <input name="repeatPassword" type="password" id="repeatPassword" value={formData.repeatPassword.value} onChange={inputChangeHandler} />
              {showError && formData.repeatPassword.isEmpty && <ErrorMessageForm message="Fill in this field." />}
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
