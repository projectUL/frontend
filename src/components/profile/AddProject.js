import React, { useState, useCallback, useEffect } from "react";

import classes from "./AddProject.module.css";
import { FaPlus } from "react-icons/fa";
import CloseButton from "./CloseButton";
import ButtonAdd from "./../UI/ButtonAdd";
import Button from "./../UI/Button";
import Chip from "./../UI/Chip";

import api from "../../api/api";

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
  technologies: ["Java", "JavaScript", "SQL", "PHP"],
};

const AddProject = ({ setAddProjectDisplay }) => {
  const [projectForm, setProjectForm] = useState(defaultProjectForm);
  const close = () => {
    setAddProjectDisplay(false);
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
  function addTechnologies() {
    if (projectForm.tech.isEmpty) return;

    const newTechnologies = [...projectForm.technologies, projectForm.tech.value];
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
    const newTechnologies = projectForm.technologies.filter((name) => name != value);
    setProjectForm({ ...projectForm, technologies: newTechnologies });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(projectForm);
  }
  return (
    <div className={classes.container}>
      <div className={classes.addProjects_wrap}>
        <div className={classes.wrapCloseBtn}>
          <CloseButton fun={() => close()} />
        </div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.firstSection}>
            <div className={classes.addGraphic}>
              <FaPlus />
            </div>
            <div>
              <div className={classes.labelInputWrap}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" onChange={handleChange} value={projectForm.name.value} />
              </div>
              <div className={classes.labelInputWrap}>
                <label htmlFor="linkRepository">Link to code repository</label>
                <input type="text" id="linkRepository" onChange={handleChange} value={projectForm.linkRepository.value} />
              </div>
            </div>
          </div>
          <div className={classes.labelInputWrap}>
            <label htmlFor="description">Description</label>
            <textarea name="" id="description" cols="30" rows="10" onChange={handleChange} value={projectForm.description.value}></textarea>
          </div>
          <div className={classes.secondSection}>
            <div className={classes.labelInputWrap}>
              <label htmlFor="tech">Technologies</label>
              <input type="text" id="tech" onChange={handleChange} value={projectForm.tech.value} />
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
