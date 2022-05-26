import React from "react";

import classes from "./ProfileNavbar.module.css";

function ProfileNavbar(props) {
  function changePage(event) {
    props.changeProfilePage(event.currentTarget.value);
  }

  return (
    <div className={classes.header}>
      <ul className={classes.xd}>
        <li className={props.picked === "description" ? classes.picked : ""}>
          <button value="description" onClick={changePage}>
            Description
          </button>
        </li>
        <li className={props.picked === "skills" ? classes.picked : ""}>
          <button value="skills" onClick={changePage}>
            Skills
          </button>
        </li>
        <li className={props.picked === "experience" ? classes.picked : ""}>
          <button value="experience" onClick={changePage}>
            Experience
          </button>
        </li>
        <li className={props.picked === "projects" ? classes.picked : ""}>
          <button value="projects" onClick={changePage}>
            Projects
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ProfileNavbar;
