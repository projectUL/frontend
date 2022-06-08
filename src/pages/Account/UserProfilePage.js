import React, { useState } from "react";
import ProfileNavbar from "../../components/layout/ProfileNavbar";

import ChangeModeEye from "../../components/profile/ChangeModeEye";
import DescriptionPage from "./Profile/DescriptionPage";
import ExperiencePage from "./Profile/ExperiencePage";
import SkillsPage from "./Profile/SkillsPage";
import ProjectsPage from "./Profile/ProjectsPage";
import ProfilePage from "../ProfilePage";
import ApplicationsPage from "./Applications/ApplicationsPage";
import SettingsPage from "./Settings/SettingsPage";

function UserProfilePage(props) {
  const [profilePage, setProfilePage] = useState("description");
  const [isEditProfileMode, setIsEditProfileMode] = useState(true);

  function changeProfileMode() {
    setIsEditProfileMode((lastState) => {
      return !lastState;
    });
  }

  function changeProfilePage(page) {
    setProfilePage(page);
  }

  return (
    <>
      {props.accountPage === "profile" && (
        <>
          <ChangeModeEye clicked={isEditProfileMode} changeEyeMode={changeProfileMode} />
          <div className="account_page_content">
            {isEditProfileMode && (
              <>
                <ProfileNavbar changeProfilePage={changeProfilePage} picked={profilePage} />
                {profilePage === "description" && profilePage && <DescriptionPage />}
                {profilePage === "skills" && <SkillsPage />}
                {profilePage === "experience" && <ExperiencePage />}
                {profilePage === "projects" && <ProjectsPage />}
              </>
            )}
            {!isEditProfileMode && <ProfilePage id="1" />}
          </div>
        </>
      )}
      <div className="account_page_boxRad">
        {props.accountPage === "applications" && <ApplicationsPage />}
        {props.accountPage === "settings" && <SettingsPage />}
      </div>
    </>
  );
}

export default UserProfilePage;
