import React, { useState } from "react";
import Button from "../UI/Button";

import classes from "./SettingsForms.module.css";
import api from "../../api/api";
import ErrorMessageForm from "../UI/ErrorMessageForm";

const defaultPassword = {
  old_password: "",
  new_password: "",
  confirm_new: "",
};

const defaultError = {
  password: false,
  email: false,
};

function SettingsForms() {
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [password, setPassword] = useState(defaultPassword);
  const [showError, setShowError] = useState(defaultError);

  function changeOldPasswordHandler(event) {
    setPassword((lastState) => {
      return { ...lastState, old_password: event.target.value };
    });
    setShowError((lastState) => {
      return { ...lastState, password: false };
    });
  }

  function changeNewPasswordHandler(event) {
    setPassword((lastState) => {
      return { ...lastState, new_password: event.target.value };
    });
    setShowError((lastState) => {
      return { ...lastState, password: false };
    });
  }

  function changeConfirmNewPasswordHandler(event) {
    setPassword((lastState) => {
      return { ...lastState, confirm_new: event.target.value };
    });
    setShowError((lastState) => {
      return { ...lastState, password: false };
    });
  }

  function changeEmailHandler(event) {
    setEmail(event.target.value);
    setShowError((lastState) => {
      return { ...lastState, email: false };
    });
  }

  async function handlerSubmitEmail() {
    console.log(email);
    const change = {
      oldEmail: localStorage.getItem("email"),
      newEmail: email,
      oldPassword: password.old_password,
      newPassword: password.new_password,
      confirmNew: password.confirm_new,
    };

    const response = await api.putUserNewEmail(change);
    console.log(response);
    if (response.status === 200)
      localStorage.setItem("email", response.data.email);
    else {
      setShowError((lastState) => {
        return { ...lastState, email: response.response.data.errorMessage };
      });
      console.log(response.response.data.errorMessage);
    }
  }

  async function handlerSubmitPassword() {
    console.log(password);

    const change = {
      oldEmail: localStorage.getItem("email"),
      newEmail: email,
      oldPassword: password.old_password,
      newPassword: password.new_password,
      confirmNew: password.confirm_new,
    };

    const response = await api.putUserNewPassword(change);
    console.log(response);
    if (response.status === 200) {
      console.log("hasło zmienione");
      setPassword(defaultPassword);
    } else {
      setShowError((lastState) => {
        return { ...lastState, password: response.response.data.errorMessage };
      });
      console.log(response.response.data.errorMessage);
    }
  }
  return (
    <div className={classes.forms}>
      <div className={classes.emailForm}>
        <div className={classes.labelInput}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={changeEmailHandler}
            value={email}
          />
          {showError.email && <ErrorMessageForm message={showError.email} />}
        </div>
        <div className={classes.btn}>
          <Button onClick={() => handlerSubmitEmail()}>Save</Button>
        </div>
      </div>
      <div className={classes.passwordForm}>
        <div className={classes.labelInput}>
          <label htmlFor="oldPassword">Old Password</label>
          <input
            type="password"
            id="oldPassword"
            onChange={changeOldPasswordHandler}
            value={password.old_password}
          />
        </div>
        <div className={classes.labelInput}>
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            onChange={changeNewPasswordHandler}
            value={password.new_password}
          />
        </div>
        <div className={classes.labelInput}>
          <label htmlFor="confirmNewPassword">Confirm new password</label>
          <input
            type="password"
            id="confirmNewPassword"
            onChange={changeConfirmNewPasswordHandler}
            value={password.confirm_new}
          />
        </div>
        {showError.password && (
          <ErrorMessageForm message={showError.password} />
        )}
        <div className={classes.btn}>
          <Button onClick={() => handlerSubmitPassword()}>Save</Button>
        </div>
      </div>
    </div>
  );
}

export default SettingsForms;
