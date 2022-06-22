import React, { useState, useCallback, useEffect } from "react";
import ProfileNavbar from "../../components/layout/ProfileNavbar";

import ChangeModeEye from "../../components/profile/ChangeModeEye";
import DescriptionPage from "./Profile/DescriptionPage";
import ExperiencePage from "./Profile/ExperiencePage";
import SkillsPage from "./Profile/SkillsPage";
import ProjectsPage from "./Profile/ProjectsPage";
import ProfilePage from "../ProfilePage";
import ApplicationsPage from "./Applications/ApplicationsPage";
import SettingsPage from "./Settings/SettingsPage";

import api from "../../api/api";

function UserProfilePage(props) {
  const [profilePage, setProfilePage] = useState("description");
  const [isEditProfileMode, setIsEditProfileMode] = useState(true);
  const [userId, setUserId] = useState("");

  const dataAPI = useCallback(async () => {
    const response = await api.getUserId(localStorage.getItem("email"));
    setUserId(response.data);
  }, []);

  useEffect(() => {
    dataAPI();
  }, [dataAPI]);

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
      {userId && (
        <>
          {props.accountPage === "profile" && (
            <>
              <ChangeModeEye clicked={isEditProfileMode} changeEyeMode={changeProfileMode} />
              <div className="account_page_content">
                {isEditProfileMode && (
                  <>
                    <ProfileNavbar changeProfilePage={changeProfilePage} picked={profilePage} />
                    {profilePage === "description" && profilePage && <DescriptionPage id={userId} />}
                    {profilePage === "skills" && <SkillsPage id={userId} />}
                    {profilePage === "experience" && <ExperiencePage id={userId} />}
                    {profilePage === "projects" && <ProjectsPage id={userId} />}
                  </>
                )}
                {!isEditProfileMode && <ProfilePage id={userId} />}
              </div>
            </>
          )}
          <div className="account_page_boxRad">
            {props.accountPage === "applications" && <ApplicationsPage />}
            {props.accountPage === "settings" && <SettingsPage />}
          </div>
        </>
      )}
    </>
  );
}

export default UserProfilePage;
