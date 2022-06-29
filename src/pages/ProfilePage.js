import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";

import SkillViewProfile from "./../components/profile/SkillViewProfile";
import ProjectViewProfile from "./../components/profile/ProjectViewProfile";
import ExperienceProfileView from "./../components/profile/ExperienceProfileView";
import ProjectDisplay from "./../components/profile/ProjectDisplay";

import api from "../api/api";
import moment from "moment";
import git from "./../images/git2.jpg";

import { FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const deafultUserProfile = {
  description: {
    name: "Your name",
    email: "Your email",
    phoneNumber: "Your phone number",
    description: "Your description",
    college: "Your college name",
  },
  skills: {
    skill: [],
    courses: [],
  },
  experience: [],
  projects: [],
};

function ProfilePage(props) {
  let { id } = useParams();

  if (!id) id = props.id;

  const [projectDisplay, setProjectDisplay] = useState(false);
  const [userProfile, setUserProfile] = useState(deafultUserProfile);
  const [showProject, setShowProject] = useState({});

  const dataAPI = useCallback(async () => {
    const response = await api.getUserProfile(localStorage.getItem("email"));
    console.log(response);
    if (response.status === 200 && response.data !== {})
      setUserProfile({
        description: { ...response.data.description },
        skills: { ...response.data.skills },
        experience: [...response.data.experience],
        projects: [...response.data.projects],
      });
  }, []);

  useEffect(() => {
    dataAPI();
  }, [dataAPI]);

  function closeProjectDisplay(project) {
    setProjectDisplay(true);
    setShowProject(project);
  }
  console.log(userProfile);
  return (
    <div className="profilePage_wrap">
      <div className="profilePage_personalData">
        <div className="profilePage_personalData_box">
          <img src={userProfile.description.avatar} alt="podatek" />
          <div className="profilePage_personalData_box2">
            <p className="profilePage_personalData_name">
              {userProfile.description.name}
            </p>
            <p>
              <FaGithub /> asdas.github
            </p>
            <p>
              <FaEnvelope /> {userProfile.description.email}
            </p>
            <p>
              <FaPhoneAlt /> {userProfile.description.phoneNumber}
            </p>
          </div>
        </div>
        <p className="profilePage_personalData_about">
          {userProfile.description.description}
        </p>
      </div>
      <div className="profilePage_line">
        <div className="square"></div>
        <div className="square square_end"></div>
      </div>
      <div className="profilePage_skills">
        <p className="profilePage_title">Skills</p>
        <div className="profilePage_skill_box">
          {userProfile.skills.skill?.map((s, i) => (
            <SkillViewProfile skill={s} key={i} />
          ))}
        </div>
      </div>
      <div className="profilePage_line">
        <div className="square"></div>
        <div className="square square_end"></div>
      </div>
      <div className="profilePage_courses">
        <p className="profilePage_title">Courses</p>
        <ul>
          {userProfile.skills.courses?.map((c) => (
            <li>{c}</li>
          ))}
        </ul>
      </div>
      <div className="profilePage_line">
        <div className="square"></div>
        <div className="square square_end"></div>
      </div>
      <div className="profilePage_expirience">
        <p className="profilePage_title">Expierence</p>
        {userProfile.experience?.map((e) => (
          <ExperienceProfileView exp={e} />
        ))}
      </div>
      <div className="profilePage_line">
        <div className="square"></div>
        <div className="square square_end"></div>
      </div>
      <div className="profilePage_education">
        <p className="profilePage_title">Education</p>
        <div className="profilePage_education_box">
          <p>{userProfile.description.college}</p>
          <p className="bold">{`${moment(
            userProfile.description.startDate
          ).format("YYYY")} - ${moment(userProfile.description.endDate).format(
            "YYYY"
          )}`}</p>
        </div>
      </div>
      <div className="profilePage_line">
        <div className="square"></div>
        <div className="square square_end"></div>
      </div>
      <div className="profilePage_projects">
        <p className="profilePage_title fs">Projects</p>
        <div className="profilePage_projects_box">
          {userProfile.projects?.map((p) => (
            <ProjectViewProfile onClick={closeProjectDisplay} data={p} />
          ))}
        </div>
      </div>
      {projectDisplay && (
        <ProjectDisplay close={setProjectDisplay} data={showProject} />
      )}
    </div>
  );
}

export default ProfilePage;
