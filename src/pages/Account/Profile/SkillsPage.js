import React, { useState, useCallback, useEffect } from "react";

import classes from "./SkillsPage.module.css";

import Skill from "./../../../components/profile/Skill";
import ButtonAdd from "./../../../components/UI/ButtonAdd";
import Chip from "./../../../components/UI/Chip";

import api from "../../../api/api";
import ErrorMessageForm from "../../../components/UI/ErrorMessageForm";

const deafultUserSkillsData = {
  skills: [],
  courses: [],
};
const defaultSkill = {
  value: "",
  skillLevel: 0,
  isEmpty: true,
};
const defaultCourse = {
  value: "",
  isEmpty: true,
};

const defaultError = {
  skill: false,
  course: false,
};

function SkillsPage(props) {
  const [skill, setSkill] = useState(defaultSkill);
  const [course, setCourse] = useState(defaultCourse);
  const [userSkillsDate, setUserSkillsDate] = useState(deafultUserSkillsData);
  const [showError, setShowError] = useState(defaultError);
  const [errorApi, setErroApi] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [reloadData, setReloadData] = useState(false);

  const dataAPI = useCallback(async () => {
    const response = await api.getUserProfileSkills(props.id);
    console.log(response);
    // console.log(typeof response.data);
    if (typeof response.data !== "object") {
      return;
    }

    setUserSkillsDate({
      skills: response.data.skill ? response.data.skill : [],
      courses: response.data.courses ? response.data.courses : [],
    });

    // if (response.hasOwnProperty("error")) {
    //   setErroApi(true);
    //   return;
    // }
  }, []);

  useEffect(() => {
    dataAPI();
  }, [reloadData]);

  function handleChangeSkill(event) {
    if (event.target.id === "skillName")
      setSkill({
        ...skill,
        value: event.target.value,
        isEmpty: event.target.value === "",
      });
    else
      setSkill({
        ...skill,
        skillLevel: event.target.value,
      });
    setShowError((lastState) => {
      return { ...lastState, skill: false };
    });
  }

  function handleChangeCourse(event) {
    setCourse({
      value: event.target.value,
      isEmpty: event.target.value === "",
    });
    setShowError((lastState) => {
      return { ...lastState, course: false };
    });
  }

  async function handleSubmitSkill(event) {
    event.preventDefault();
    // if (!validation(userDescriptionDate)) {
    //   setShowError(true);
    //   return;
    // }

    if (skill.value.length < 1) {
      setShowError((lastState) => {
        return { ...lastState, skill: true };
      });
      return;
    }

    const newSkills = {
      skill: [
        ...userSkillsDate.skills,
        {
          skillName: skill.value,
          skillLevel: skill.skillLevel,
        },
      ],
      courses: userSkillsDate.courses,
    };
    console.log(newSkills);
    const response = await api.putUserProfileSkills(props.id, newSkills);
    console.log(response);
    setSkill(defaultSkill);
    setReloadData(!reloadData);
    // if (response.hasOwnProperty("error")) {
    //   setErroApi(true);
    //   return;
    // }
  }

  async function handleSubmitCourse(event) {
    event.preventDefault();
    // if (!validation(userDescriptionDate)) {
    //   setShowError(true);
    //   return;
    // }

    if (course.value.length < 1) {
      setShowError((lastState) => {
        return { ...lastState, course: true };
      });
      return;
    }

    const newCourses = {
      skill: userSkillsDate.skills,
      courses: [...userSkillsDate.courses, course.value], //[course.value],
    };
    console.log(newCourses);
    const response = await api.putUserProfileSkills(props.id, newCourses);
    console.log(response);
    setCourse(defaultCourse);
    setReloadData(!reloadData);
    // if (response.hasOwnProperty("error")) {
    //   setErroApi(true);
    //   return;
    // }
  }

  async function handleDeleteSkill(value) {
    const toDelete = { data: { skillName: value } };
    const response = await api.deleteUserProfileSkills(props.id, toDelete);
    console.log(response);
    setReloadData(!reloadData);
  }

  async function handleDeleteCourse(value) {
    console.log(value);
    const toDelete = { data: { course: value } };
    const response = await api.deleteUserProfileSkills(props.id, toDelete);
    console.log(response);
    setReloadData(!reloadData);
  }

  function validation(data) {
    for (const key in data) {
      if (data[key].isEmpty) return false;
    }
    return true;
  }

  return (
    <div className={classes.SkillsPage_wrap}>
      <form
        action=""
        className={classes.skillForm}
        onSubmit={handleSubmitSkill}
      >
        <div className={classes.labelInputWrap}>
          <label htmlFor="skillanme">Skill name</label>
          <input
            type="text"
            id="skillName"
            onChange={handleChangeSkill}
            value={skill.value}
          />
        </div>
        <div className={classes.labelInputWrap}>
          <label htmlFor="skillLevel">Skill level</label>
          <input
            type="range"
            min="0"
            max="5"
            className={classes.slider}
            id="skillLevel"
            onChange={handleChangeSkill}
            value={skill.skillLevel}
          />
        </div>
        <div className={classes.end}>
          <ButtonAdd />
        </div>
      </form>
      {showError.skill && <ErrorMessageForm message="Skill cannot be empty." />}
      <div className={classes.mySkills_wrap}>
        <p className={classes.title}>My skills</p>
        {userSkillsDate.skills.map((e, index) => (
          <Skill delete={handleDeleteSkill} skill={e} key={index} />
        ))}
      </div>
      <div className={classes.courses_wrap}>
        <p className={classes.title}>Finished courses</p>
        <form
          action=""
          className={classes.coursesform}
          onSubmit={handleSubmitCourse}
        >
          <div className={classes.labelInputWrap}>
            <label htmlFor="courseName">Course name</label>
            <input
              type="text"
              id="courseName"
              onChange={handleChangeCourse}
              value={course.value}
            />
          </div>
          <div className={classes.end}>
            <ButtonAdd />
          </div>
        </form>
        {showError.course && (
          <ErrorMessageForm message="Course cannot be empty." />
        )}
        <div className={classes.courseChipsWrap}>
          {userSkillsDate.courses.map((name, index) => (
            <Chip removeChip={handleDeleteCourse} key={index}>
              {name}
            </Chip>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
