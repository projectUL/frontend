import React, { useState, useCallback, useEffect } from "react";

import classes from "./ProjectsPage.module.css";

import { FaPlus } from "react-icons/fa";
import Project from "../../../components/profile/Project";
import AddProject from "../../../components/profile/AddProject";

import api from "../../../api/api";

function ProjectsPage(props) {
  const [projects, setProjects] = useState([]);
  const [addProjectDisplay, setAddProjectDisplay] = useState(false);
  const [reloadData, setReloadData] = useState(false);

  const dataAPI = useCallback(async () => {
    const response = await api.getUserProfileProjects(props.id);
    console.log(response);
    // console.log(typeof response.data);
    if (typeof response.data !== "object") {
      return;
    }

    setProjects(response.data);
    // if (response.hasOwnProperty("error")) {
    //   setErroApi(true);
    //   return;
    // }
  }, []);

  useEffect(() => {
    dataAPI();
  }, [reloadData]);

  async function deleteProject(value) {
    console.log(`usuwam`, value);
    const toDelete = { data: { projectName: value } };
    const response = await api.deleteUserProfileProject(props.id, toDelete);
    console.log(response);
    setReloadData(!reloadData);
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

        {addProjectDisplay && (
          <AddProject
            setAddProjectDisplay={setAddProjectDisplay}
            projects={projects}
            id={props.id}
            reloadData={reloadData}
            setReloadData={setReloadData}
          />
        )}
      </div>
    </div>
  );
}

export default ProjectsPage;
