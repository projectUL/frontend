import React, { useState } from "react";
import { useParams } from "react-router-dom";

import SkillViewProfile from "./../components/profile/SkillViewProfile";
import ProjectViewProfile from "./../components/profile/ProjectViewProfile";
import ExperienceProfileView from "./../components/profile/ExperienceProfileView";
import ProjectDisplay from "./../components/profile/ProjectDisplay";

import git from "./../images/git2.jpg";

import { FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function ProfilePage(props) {
  let { id } = useParams();

  if (!id) id = props.id;

  const [projectDisplay, setProjectDisplay] = useState(false);

  return (
    <div className="profilePage_wrap">
      <div className="profilePage_personalData">
        <div className="profilePage_personalData_box">
          <img src={git} alt="podatek" />
          <div className="profilePage_personalData_box2">
            <p className="profilePage_personalData_name">Adam Kowalski</p>
            <p>
              <FaGithub /> asdas.github
            </p>
            <p>
              <FaEnvelope /> email@wp.com
            </p>
            <p>
              <FaPhoneAlt /> 874-874-874
            </p>
          </div>
        </div>
        <p className="profilePage_personalData_about">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit harum adipisci omnis alias nobis repellendus sunt iusto deleniti recusandae
          sequi veritatis officia soluta quam quos, consequatur consequuntur nam dignissimos culpa. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Architecto, eligendi, aspernatur nisi nesciunt ipsa distinctio cumque officia ullam maiores accusamus quis temporibus
          voluptates explicabo dicta error excepturi reiciendis. Quas, enim! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae impedit
          quam alias facilis quisquam consectetur? Praesentium accusamus, quidem illo magni inventore facere qui excepturi doloremque, maxime
          dignissimos voluptatem molestiae eos!
        </p>
      </div>
      <div className="profilePage_line">
        <div className="square"></div>
        <div className="square square_end"></div>
      </div>
      <div className="profilePage_skills">
        <p className="profilePage_title">Skills</p>
        <div className="profilePage_skill_box">
          <SkillViewProfile />
          <SkillViewProfile />
        </div>
      </div>
      <div className="profilePage_line">
        <div className="square"></div>
        <div className="square square_end"></div>
      </div>
      <div className="profilePage_courses">
        <p className="profilePage_title">Courses</p>
        <ul>
          <li>Firebase</li>
          <li>Firebase</li>
          <li>Firebase</li>
        </ul>
      </div>
      <div className="profilePage_line">
        <div className="square"></div>
        <div className="square square_end"></div>
      </div>
      <div className="profilePage_expirience">
        <p className="profilePage_title">Expierence</p>
        <ExperienceProfileView />
        <ExperienceProfileView />
      </div>
      <div className="profilePage_line">
        <div className="square"></div>
        <div className="square square_end"></div>
      </div>
      <div className="profilePage_education">
        <p className="profilePage_title">Education</p>
        <div className="profilePage_education_box">
          <p>Uniwersytet Łódzki Wydział Fizyki i Informatyki Stosowanej</p>
          <p className="bold">2018-2021</p>
        </div>
        <div className="profilePage_education_box">
          <p>Uniwersytet Łódzki Wydział Fizyki i Informatyki Stosowanej</p>
          <p className="bold">2018-2021</p>
        </div>
      </div>
      <div className="profilePage_line">
        <div className="square"></div>
        <div className="square square_end"></div>
      </div>
      <div className="profilePage_projects">
        <p className="profilePage_title">Projects</p>
        <div className="profilePage_projects_box">
          <ProjectViewProfile onClick={() => setProjectDisplay(true)} />
          <ProjectViewProfile onClick={() => setProjectDisplay(true)} />
          <ProjectViewProfile onClick={() => setProjectDisplay(true)} />
          <ProjectViewProfile onClick={() => setProjectDisplay(true)} />
          <ProjectViewProfile onClick={() => setProjectDisplay(true)} />
        </div>
      </div>
      {projectDisplay && <ProjectDisplay setProjectDisplay={setProjectDisplay} />}
    </div>
  );
}

export default ProfilePage;
