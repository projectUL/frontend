import React, { useState } from "react";

import classes from "./ProjectsPage.module.css";

import { FaPlus } from "react-icons/fa";
import Project from "../../../components/profile/Project";
import AddProject from "../../../components/profile/AddProject";

function ProjectsPage() {
  const [addProjectDisplay, setAddProjectDisplay] = useState(false);
  return (
    <div className={classes.center}>
      <div className={classes.projects_wrap}>
        <div className={classes.addProjects}>
          <FaPlus onClick={() => setAddProjectDisplay(true)} />
        </div>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        {addProjectDisplay && <AddProject setAddProjectDisplay={setAddProjectDisplay} />}
      </div>
    </div>
  );
}

export default ProjectsPage;
