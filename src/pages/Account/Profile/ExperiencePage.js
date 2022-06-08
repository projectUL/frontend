import React, { useState, useCallback, useEffect } from "react";

import classes from "./ExperiencePage.module.css";

import Button from "./../../../components/UI/Button";
import Experience from "./../../../components/profile/Experience";

import api from "../../../api/api";

const deafultExperienceFormDate = {
  companyName: {
    value: "",
    isEmpty: true,
  },
  position: {
    value: "",
    isEmpty: true,
  },
  start: {
    value: "",
    isEmpty: true,
  },
  end: {
    value: "",
    isEmpty: true,
  },
};
const defultExperience = [
  { companyName: "Google", position: "Fullstack Mitiomani", start: "10-07-2022", end: "11-07-2022" },
  { companyName: "Google", position: "Fullstack Mitiomani", start: "10-07-2022", end: "11-07-2022" },
  { companyName: "Google", position: "Fullstack Mitiomani", start: "10-07-2022", end: "11-07-2022" },
];
function ExperiencePage() {
  const [experienceForm, setUserExperienceForm] = useState(deafultExperienceFormDate);
  const [experience, setExerience] = useState(defultExperience);
  function handleChange(event) {
    setUserExperienceForm({
      ...experienceForm,
      [event.target.id]: {
        value: event.target.value,
        isEmpty: event.target.value === "",
      },
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(experienceForm);
  }
  function handleDelete() {
    console.log(`usuwam`);
  }
  return (
    <div className={classes.experiencePage_wrap}>
      <form className={classes.profileDescriptionForm} onSubmit={handleSubmit}>
        <div className={classes.profileDescriptionForm_ThirdSection_School}>
          <label htmlFor="companyName">Company name</label>
          <input type="text" id="companyName" onChange={handleChange} value={experienceForm.companyName.value} />
          <label htmlFor="position">Position</label>
          <input type="text" id="position" onChange={handleChange} value={experienceForm.position.value} />
          <div className={classes.startEndCollege_wrap}>
            <div className={classes.startEndCollege}>
              <label htmlFor="start">Start</label>
              <input type="date" id="start" onChange={handleChange} value={experienceForm.start.value} />
            </div>
            <div className={classes.startEndCollege}>
              <label htmlFor="end">End</label>
              <input type="date" id="end" onChange={handleChange} value={experienceForm.end.value} />
            </div>
          </div>
        </div>
        <Button className={classes.profileDescriptionForm_button}>Add</Button>
      </form>
      <div className={classes.exp_wrap}>
        <p className={classes.title}>Experience:</p>
        {experience.map((e, i) => (
          <Experience key={i} delete={handleDelete} data={e} />
        ))}
      </div>
    </div>
  );
}

export default ExperiencePage;
