import React, { useState } from "react";

import classes from "./AuthForm.module.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function AuthForm(props) {
  const { authType, setAuthType } = useState(props.providedAuthType);

  return (
    <div>
      <h1>{authType}</h1>
      {authType === "register" && <RegisterForm />}
      {authType !== "register" && <LoginForm />}
    </div>
  );
}

export default AuthForm;
