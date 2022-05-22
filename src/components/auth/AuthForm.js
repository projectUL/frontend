import React, { useEffect, useState } from "react";

import classes from "./AuthForm.module.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function AuthForm(props) {
  const [authType, setAuthType] = useState(props.providedAuthType);

  useEffect(() => {
    setAuthType(props.providedAuthType);
  }, [authType, setAuthType, props.providedAuthType]);

  return (
    <div className={`defaultBox ${classes.box}`}>
      {authType === "register" && <RegisterForm />}
      {authType === "login" && <LoginForm />}
    </div>
  );
}

export default AuthForm;
