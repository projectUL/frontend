import React, { useState, useCallback, useEffect } from "react";

import classes from "./SkillsPage.module.css";

import Skill from "./../../../components/profile/Skill";
import ButtonAdd from "./../../../components/UI/ButtonAdd";
import Chip from "./../../../components/UI/Chip";

import api from "../../../api/api";

const deafultUserSkillsData = {
  skills: [
    { skillName: "Angielski", skillLevel: 3 },
    { skillName: "Angielski", skillLevel: 4 },
    { skillName: "Angielski", skillLevel: 5 },
  ],
  courses: ["Java", "JavaScript", "SQL", "PHP"],
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
function SkillsPage() {
  const [skill, setSkill] = useState(defaultSkill);
  const [course, setCourse] = useState(defaultCourse);
  const [userSkillsDate, setUserSkillsDate] = useState(deafultUserSkillsData);
  const [showError, setShowError] = useState(false);
  const [errorApi, setErroApi] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // const dataAPI = useCallback(async () => {

  //   if (!validation(userSkillsDate)) {
  //     setShowError(true);
  //     return;
  //   }

  //   const response = await api.getCompanyById(id);

  //   if (response.hasOwnProperty("error")) {
  //     setErroApi(true);
  //     return;
  //   }
  // }, []);

  // useEffect(() => {
  //   dataAPI();
  // }, [dataAPI]);

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
  }

  function handleChangeCourse(event) {
    setCourse({
      value: event.target.value,
      isEmpty: event.target.value === "",
    });
  }

  function handleSubmitSkill(event) {
    event.preventDefault();
    console.log(skill);

    // if (!validation(userDate)) {
    //   setShowError(true);
    //   return;
    // }

    // const response = await api.getCompanyById(id);

    // if (response.hasOwnProperty("error")) {
    //   setErroApi(true);
    //   return;
    // }
    //console.log("zapisane")
  }
  function handleSubmitCourse(event) {
    event.preventDefault();
    console.log(course);

    // if (!validation(userDate)) {
    //   setShowError(true);
    //   return;
    // }

    // const response = await api.getCompanyById(id);

    // if (response.hasOwnProperty("error")) {
    //   setErroApi(true);
    //   return;
    // }
    //console.log("zapisane")
  }
  function handleDeleteSkill(event) {
    console.log("Usuwam");
  }
  function handleDeleteCourse(value) {
    console.log("Usuwam", value);
  }
  function validation(data) {
    for (const key in data) {
      if (data[key].isEmpty) return false;
    }
    return true;
  }

  return (
    <div className={classes.SkillsPage_wrap}>
      <form action="" className={classes.skillForm} onSubmit={handleSubmitSkill}>
        <div className={classes.labelInputWrap}>
          <label htmlFor="skillanme">Skill name</label>
          <input type="text" id="skillName" onChange={handleChangeSkill} value={skill.value} />
        </div>
        <div className={classes.labelInputWrap}>
          <label htmlFor="skillLevel">Skill level</label>
          <input type="range" min="0" max="5" className={classes.slider} id="skillLevel" onChange={handleChangeSkill} value={skill.skillLevel} />
        </div>
        <div className={classes.end}>
          <ButtonAdd />
        </div>
      </form>
      <div className={classes.mySkills_wrap}>
        <p className={classes.title}>My skills</p>
        {userSkillsDate.skills.map((e, index) => (
          <Skill delete={handleDeleteSkill} skill={e} key={index} />
        ))}
      </div>
      <div className={classes.courses_wrap}>
        <p className={classes.title}>Finished courses</p>
        <form action="" className={classes.coursesform} onSubmit={handleSubmitCourse}>
          <div className={classes.labelInputWrap}>
            <label htmlFor="courseName">Course name</label>
            <input type="text" id="courseName" onChange={handleChangeCourse} value={course.value} />
          </div>
          <div className={classes.end}>
            <ButtonAdd />
          </div>
        </form>
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
