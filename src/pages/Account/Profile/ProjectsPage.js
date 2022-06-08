import React, { useState, useCallback, useEffect } from "react";

import classes from "./ProjectsPage.module.css";

import { FaPlus } from "react-icons/fa";
import Project from "../../../components/profile/Project";
import AddProject from "../../../components/profile/AddProject";

import api from "../../../api/api";

const defaultProjects = [
  { projectName: "Project 1", id: "15478" },
  { projectName: "Project 2", id: "15478" },
  { projectName: "Project 3", id: "15478" },
  { projectName: "Project 4", id: "15478" },
];

function ProjectsPage() {
  const [projects, setProjects] = useState(defaultProjects);
  const [addProjectDisplay, setAddProjectDisplay] = useState(false);
  function deleteProject() {
    console.log("delete");
  }
  return (
    <div className={classes.center}>
      <div className={classes.projects_wrap}>
        <div className={classes.addProjects} onClick={() => setAddProjectDisplay(true)}>
          <FaPlus />
        </div>
        {projects.map((project, index) => (
          <Project key={index} data={project} delete={deleteProject} />
        ))}

        {addProjectDisplay && <AddProject setAddProjectDisplay={setAddProjectDisplay} />}
      </div>
    </div>
  );
}

export default ProjectsPage;
