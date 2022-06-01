import React, { useState } from "react";
import Button from "../UI/Button";

import classes from "./SettingsForms.module.css";

const defaultPassword = {
  old_password: "",
  new_password: "",
  confirm_new: "",
};

function SettingsForms() {
  const [email, setEmail] = useState("");
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
        </div>
        <div className={classes.btn}>
          <Button>Save</Button>
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
        <div className={classes.btn}>
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
}

export default SettingsForms;
