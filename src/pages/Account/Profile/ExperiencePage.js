import React, { useState, useCallback, useEffect } from "react";

import classes from "./ExperiencePage.module.css";

import Button from "./../../../components/UI/Button";
import Experience from "./../../../components/profile/Experience";

import api from "../../../api/api";
import ErrorMessageForm from "../../../components/UI/ErrorMessageForm";

const deafultExperienceFormDate = {
  companyName: {
    value: "",
    isEmpty: true,
  },
  position: {
    value: "",
    isEmpty: true,
  },
  startDate: {
    value: "",
    isEmpty: true,
  },
  endDate: {
    value: "",
    isEmpty: true,
  },
};

const defaultError = {
  companyName: false,
  position: false,
  startDate: false,
  endDate: false,
};

const defultExperience = [
  {
    companyName: "Google",
    position: "Fullstack Mitiomani",
    startDate: "10-07-2022",
    endDate: "11-07-2022",
  },
  {
    companyName: "Google",
    position: "Fullstack Mitiomani",
    startDate: "10-07-2022",
    endDate: "11-07-2022",
  },
  {
    companyName: "Google",
    position: "Fullstack Mitiomani",
    startDate: "10-07-2022",
    endDate: "11-07-2022",
  },
];
function ExperiencePage(props) {
  const [experienceForm, setUserExperienceForm] = useState(
    deafultExperienceFormDate
  );
  const [experience, setExerience] = useState([]);
  const [reloadData, setReloadData] = useState(false);
  const [showError, setShowError] = useState(defaultError);

  const dataAPI = useCallback(async () => {
    const response = await api.getUserProfileExperience(props.id);
    console.log(response);
    // console.log(typeof response.data);
    if (typeof response.data !== "object") {
      return;
    }

    setExerience(response.data);

    // if (response.hasOwnProperty("error")) {
    //   setErroApi(true);
    //   return;
    // }
  }, []);

  useEffect(() => {
    dataAPI();
  }, [reloadData]);

  function handleChange(event) {
    setUserExperienceForm({
      ...experienceForm,
      [event.target.id]: {
        value: event.target.value,
        isEmpty: event.target.value === "",
      },
    });
    setShowError({
      companyName: false,
      position: false,
      startDate: false,
      endDate: false,
    });
  }

  function validation() {
    const errorObj = {
      companyName: false,
      position: false,
      startDate: false,
      endDate: false,
    };

    for (const key in experienceForm) {
      if (key === "startDate" || key === "endDate") continue;
      if (experienceForm[key].isEmpty) errorObj[key] = true;
    }

    let fdate = new Date(experienceForm.startDate.value);
    let tdate = new Date(experienceForm.endDate.value);
    console.log(experienceForm.startDate.value);
    if (
      fdate.valueOf() > tdate.valueOf() ||
      !experienceForm.startDate.value ||
      !experienceForm.endDate.value
    ) {
      errorObj.startDate = true;
      errorObj.endDate = true;
    }

    setShowError(errorObj);

    for (let i of Object.values(errorObj)) {
      if (i) return true;
    }
    return false;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(experienceForm);

    if (validation()) return;

    const exp = [
      ...experience,
      {
        companyName: experienceForm.companyName.value,
        position: experienceForm.position.value,
        startDate: experienceForm.startDate.value,
        endDate: experienceForm.endDate.value,
      },
    ];
    const response = await api.putUserProfileExperience(props.id, exp);
    console.log(response);
    if (response.status === 200) {
      setReloadData(!reloadData);
      setUserExperienceForm(deafultExperienceFormDate);
    }
  }
  async function handleDelete(value) {
    console.log(`usuwam`, value);
    const toDelete = { data: { companyName: value } };
    console.log("WTF", props.id, toDelete);
    const response = await api.deleteUserProfileExperience(props.id, toDelete);
    console.log(response);
    setReloadData(!reloadData);
  }
  return (
    <div className={classes.experiencePage_wrap}>
      <form className={classes.profileDescriptionForm} onSubmit={handleSubmit}>
        <div className={classes.profileDescriptionForm_ThirdSection_School}>
          <label htmlFor="companyName">Company name</label>
          <input
            type="text"
            id="companyName"
            onChange={handleChange}
            value={experienceForm.companyName.value}
          />
          {showError.companyName && (
            <ErrorMessageForm message="Company name cannot be empty." />
          )}
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            onChange={handleChange}
            value={experienceForm.position.value}
          />
          {showError.position && (
            <ErrorMessageForm message="Position cannot be empty." />
          )}
          <div className={classes.startEndCollege_wrap}>
            <div className={classes.startEndCollege}>
              <label htmlFor="startDate">Start</label>
              <input
                type="date"
                id="startDate"
                onChange={handleChange}
                value={experienceForm.startDate.value}
              />
              {showError.startDate && (
                <ErrorMessageForm message="Invalid date" />
              )}
            </div>
            <div className={classes.startEndCollege}>
              <label htmlFor="endDate">End</label>
              <input
                type="date"
                id="endDate"
                onChange={handleChange}
                value={experienceForm.endDate.value}
              />
              {showError.endDate && <ErrorMessageForm message="Invalid date" />}
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
