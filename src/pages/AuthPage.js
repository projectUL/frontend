import React from "react";
import AuthForm from "../components/auth/AuthForm";

function AuthPage(props) {
  let providedAuthType = props.register ? "register" : "login";

  return (
    <div>
      <AuthForm providedAuthType={providedAuthType} />
      {providedAuthType === "register" && <div className="bgImgRegister"></div>}
      {providedAuthType === "login" && <div className="bgImgLogin"></div>}
    </div>
  );
}

export default AuthPage;
