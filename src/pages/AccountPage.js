import React, { useState } from "react";
import AccountNavbar from "../components/layout/AccountNavbar";
import ProfileNavbar from "../components/layout/ProfileNavbar";
import ChangeModeEye from "../components/profile/ChangeModeEye";
import ApplicationsPage from "./Account/Applications/ApplicationsPage";
import DescriptionPage from "./Account/Profile/DescriptionPage";
import ExperiencePage from "./Account/Profile/ExperiencePage";
import ProjectsPage from "./Account/Profile/ProjectsPage";
import SkillsPage from "./Account/Profile/SkillsPage";
import SettingsPage from "./Account/Settings/SettingsPage";
import ProfilePage from "./ProfilePage";

function AccountPage() {
  const [profilePage, setProfilePage] = useState("description");
  const [accountPage, setAccountPage] = useState("profile");
  const [isEditProfileMode, setIsEditProfileMode] = useState(true);

  //function sendData(data) {}

  function changeProfilePage(page) {
    setProfilePage(page);
  }

  function changeAccountPage(page) {
    setAccountPage(page);
    setProfilePage("description");
    setIsEditProfileMode(true);
  }

  function changeProfileMode() {
    setIsEditProfileMode((lastState) => {
      return !lastState;
    });
  }

  if (accountPage === "profile") {
    return (
      <>
        <AccountNavbar changeAccountPage={changeAccountPage} picked={accountPage} />
        <ChangeModeEye clicked={isEditProfileMode} changeEyeMode={changeProfileMode} />
        {isEditProfileMode && (
          <>
            <ProfileNavbar changeProfilePage={changeProfilePage} picked={profilePage} />
            <div className="account_page_content">
              {profilePage === "description" && profilePage && <DescriptionPage />}
              {profilePage === "skills" && profilePage && <SkillsPage />}
              {profilePage === "experience" && profilePage && <ExperiencePage />}
              {profilePage === "projects" && profilePage && <ProjectsPage />}
            </div>
          </>
        )}

        {!isEditProfileMode && <ProfilePage id="1" />}
      </>
    );
  }

  return (
    <>
      <AccountNavbar changeAccountPage={changeAccountPage} picked={accountPage} />
      <div className="account_page_boxRad">
        {accountPage === "applications" && <ApplicationsPage />}
        {accountPage === "settings" && <SettingsPage />}
      </div>
    </>
  );
}

export default AccountPage;
