import React, { useState, useCallback, useEffect } from "react";

import classes from "./AddProject.module.css";
import { FaPlus } from "react-icons/fa";
import CloseButton from "./CloseButton";
import ButtonAdd from "./../UI/ButtonAdd";
import Button from "./../UI/Button";
import Chip from "./../UI/Chip";

import api from "../../api/api";
import ErrorMessageForm from "../UI/ErrorMessageForm";

const defaultProjectForm = {
  name: {
    value: "",
    isEmpty: true,
  },
  linkRepository: {
    value: "",
    isEmpty: true,
  },
  description: {
    value: "",
    isEmpty: true,
  },
  tech: {
    value: "",
    isEmpty: true,
  },
  logo: {
    value: "",
    isEmpty: true,
  },
  technologies: [],
};

const defaultError = {
  name: false,
  description: false,
};

const AddProject = (props) => {
  const [projectForm, setProjectForm] = useState(defaultProjectForm);
  const [showError, setShowError] = useState(defaultError);
  const close = () => {
    props.setAddProjectDisplay(false);
  };
  function handleChange(event) {
    setProjectForm({
      ...projectForm,
      [event.target.id]: {
        value: event.target.value,
        isEmpty: event.target.value === "",
      },
    });
  }
  function addTechnologies(event) {
    event.preventDefault();
    if (projectForm.tech.isEmpty) return;

    const newTechnologies = [
      ...projectForm.technologies,
      projectForm.tech.value,
    ];
    setProjectForm({
      ...projectForm,
      technologies: newTechnologies,
      tech: {
        value: "",
        isEmpty: true,
      },
    });
  }
  function deleteTechnologies(value) {
    const newTechnologies = projectForm.technologies.filter(
      (name) => name != value
    );
    setProjectForm({ ...projectForm, technologies: newTechnologies });
  }

  const validation = () => {
    const errorObj = {
      name: false,
      description: false,
    };
    if (projectForm.name.value.length < 1) errorObj.name = true;
    if (projectForm.description.value.length < 1) errorObj.description = true;

    setShowError(errorObj);

    for (let i of Object.values(errorObj)) {
      if (i) return true;
    }
    return false;
  };

  async function handleSubmit(event) {
    event.preventDefault();

    if (validation()) return;

    const newProject = [
      ...props.projects,
      {
        projectName: projectForm.name.value,
        projectLink: projectForm.linkRepository.value,
        projectDesc: projectForm.description.value,
        projectTech: projectForm.technologies,
        projectLogo: projectForm.logo.value,
        userEmail: localStorage.getItem("email"),
      },
    ];
    console.log(newProject);
    const response = await api.putUserProfileProjects(props.id, newProject);
    console.log(response);
    props.setReloadData(!props.reloadData);
    close();
  }
  console.log("props", props.projects);
  return (
    <div className={classes.container}>
      <div className={classes.addProjects_wrap}>
        <div className={classes.wrapCloseBtn}>
          <CloseButton fun={() => close()} />
        </div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.firstSection}>
            <div className={classes.addGraphic}>
              {projectForm.logo.value && (
                <img src={projectForm.logo.value} alt="logo" />
              )}
              <div className={classes.avatarInput}>
                <input
                  type="text"
                  id="logo"
                  onChange={handleChange}
                  value={projectForm.logo.value}
                  placeholder="project logo link"
                />
              </div>
            </div>
            <div>
              <div className={classes.labelInputWrap}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  onChange={handleChange}
                  value={projectForm.name.value}
                />
                {showError.name && (
                  <ErrorMessageForm message="Project name cannot be empty" />
                )}
              </div>
              <div className={classes.labelInputWrap}>
                <label htmlFor="linkRepository">Link to code repository</label>
                <input
                  type="text"
                  id="linkRepository"
                  onChange={handleChange}
                  value={projectForm.linkRepository.value}
                />
              </div>
            </div>
          </div>
          <div className={classes.labelInputWrap}>
            <label htmlFor="description">Description</label>
            <textarea
              name=""
              id="description"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={projectForm.description.value}
            ></textarea>
            {showError.description && (
              <ErrorMessageForm message="Description cannot be empty" />
            )}
          </div>
          <div className={classes.secondSection}>
            <div className={classes.labelInputWrap}>
              <label htmlFor="tech">Technologies</label>
              <input
                type="text"
                id="tech"
                onChange={handleChange}
                value={projectForm.tech.value}
              />
            </div>
            <div className={classes.btnAddWrap}>
              <ButtonAdd add={addTechnologies} />
            </div>
          </div>
          <div className={classes.technologiesBox}>
            {projectForm.technologies.map((tech, index) => (
              <Chip key={index} removeChip={deleteTechnologies}>
                {tech}
              </Chip>
            ))}
          </div>
          <Button>Save</Button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
