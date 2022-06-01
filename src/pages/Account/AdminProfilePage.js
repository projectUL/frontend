import React from "react";
import VerificationPage from "./Admin/VerificationPage";
import SettingsPage from "./Settings/SettingsPage";

function AdminProfilePage(props) {
  return (
    <>
      <div className="account_page_boxRad">
        {props.accountPage === "profile" && <VerificationPage />}
        {props.accountPage === "settings" && <SettingsPage />}
      </div>
    </>
  );
}

export default AdminProfilePage;
