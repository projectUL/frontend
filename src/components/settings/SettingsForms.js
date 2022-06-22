import React, { useState } from "react";
import Button from "../UI/Button";

import classes from "./SettingsForms.module.css";
import api from "../../api/api";

const defaultPassword = {
  old_password: "",
  new_password: "",
  confirm_new: "",
};

function SettingsForms() {
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [password, setPassword] = useState(defaultPassword);

  function changeOldPasswordHandler(event) {
    setPassword((lastState) => {
      return { ...lastState, old_password: event.target.value };
    });
  }

  function changeNewPasswordHandler(event) {
    setPassword((lastState) => {
      return { ...lastState, new_password: event.target.value };
    });
  }

  function changeConfirmNewPasswordHandler(event) {
    setPassword((lastState) => {
      return { ...lastState, confirm_new: event.target.value };
    });
  }

  function changeEmailHandler(event) {
    setEmail(event.target.value);
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
    if (response.status === 200) localStorage.setItem("email", response.data.email);
    else console.log(response.response.data.errorMessage);
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
    } else console.log(response.response.data.errorMessage);
  }
  return (
    <div className={classes.forms}>
      <div className={classes.emailForm}>
        <div className={classes.labelInput}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={changeEmailHandler} value={email} />
        </div>
        <div className={classes.btn}>
          <Button onClick={() => handlerSubmitEmail()}>Save</Button>
        </div>
      </div>
      <div className={classes.passwordForm}>
        <div className={classes.labelInput}>
          <label htmlFor="oldPassword">Old Password</label>
          <input type="password" id="oldPassword" onChange={changeOldPasswordHandler} value={password.old_password} />
        </div>
        <div className={classes.labelInput}>
          <label htmlFor="newPassword">New Password</label>
          <input type="password" id="newPassword" onChange={changeNewPasswordHandler} value={password.new_password} />
        </div>
        <div className={classes.labelInput}>
          <label htmlFor="confirmNewPassword">Confirm new password</label>
          <input type="password" id="confirmNewPassword" onChange={changeConfirmNewPasswordHandler} value={password.confirm_new} />
        </div>
        <div className={classes.btn}>
          <Button onClick={() => handlerSubmitPassword()}>Save</Button>
        </div>
      </div>
    </div>
  );
}

export default SettingsForms;
