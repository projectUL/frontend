import React, { useContext, useState } from "react";

import AuthContext from "../components/context/auth-context";
import AdminProfilePage from "./Account/AdminProfilePage";
import CompanyProfilePage from "./Account/CompanyProfilePage";
import UserProfilePage from "./Account/UserProfilePage";
import AccountNavbar from "../components/layout/AccountNavbar";
function AccountPage() {
  const [accountPage, setAccountPage] = useState("profile");

  const authCtx = useContext(AuthContext);
  //function sendData(data) {}

  function changeAccountPage(page) {
    setAccountPage(page);
  }

  if (authCtx.accessLevel === 1) {
    return (
      <>
        <AccountNavbar
          changeAccountPage={changeAccountPage}
          picked={accountPage}
        />
        <UserProfilePage accountPage={accountPage} />
      </>
    );
  } else if (authCtx.accessLevel === 2) {
    return (
      <>
        <AccountNavbar
          company={true}
          changeAccountPage={changeAccountPage}
          picked={accountPage}
        />
        <CompanyProfilePage accountPage={accountPage} />
      </>
    );
  } else if (authCtx.accessLevel === 3) {
    return (
      <>
        <AccountNavbar
          admin={true}
          changeAccountPage={changeAccountPage}
          picked={accountPage}
        />
        <AdminProfilePage accountPage={accountPage} />
      </>
    );
  }
}

export default AccountPage;
