import React from "react";
import AuthForm from "../components/auth/AuthForm";

function AuthPage(props) {
  const providedAuthType = props.register ? "register" : "login";
  return (
    <div>
      <h1>AuthPage {providedAuthType}</h1>
      <AuthForm providedAuthType={providedAuthType} />
    </div>
  );
}

export default AuthPage;
