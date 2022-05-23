import React from "react";

import classes from "./SkillsPage.module.css";

import Skill from "./../../../components/profile/Skill";
import ButtonAdd from "./../../../components/UI/ButtonAdd";
import Chip from "./../../../components/UI/Chip";

function SkillsPage() {
  return (
    <div className={classes.SkillsPage_wrap}>
      <form action="" className={classes.skillForm}>
        <div className={classes.labelInputWrap}>
          <label htmlFor="skillanme">Skill name</label>
          <input type="text" id="skillName" />
        </div>
        <div className={classes.labelInputWrap}>
          <label htmlFor="myRange">Skill level</label>
          <input type="range" min="0" max="5" defaultValue="3" className={classes.slider} id="myRange" />
        </div>
        <div className={classes.end}>
          <ButtonAdd />
        </div>
      </form>
      <div className={classes.mySkills_wrap}>
        <p className={classes.title}>My skills</p>
        <Skill />
        <Skill />
        <Skill />
      </div>
      <div className={classes.courses_wrap}>
        <p className={classes.title}>Finished courses</p>
        <form action="" className={classes.coursesform}>
          <div className={classes.labelInputWrap}>
            <label htmlFor="courseName">Course name</label>
            <input type="text" id="courseName" />
          </div>
          <div className={classes.end}>
            <ButtonAdd />
          </div>
        </form>
        <div className={classes.courseChipsWrap}>
          <Chip> Java </Chip>
          <Chip> JavaScript </Chip>
          <Chip> Sql </Chip>
          <Chip> Java </Chip>
          <Chip> JavaScript </Chip>
          <Chip> Sql </Chip>
          <Chip> Java </Chip>
          <Chip> JavaScript </Chip>
          <Chip> Sql </Chip>
          <Chip> Java </Chip>
          <Chip> JavaScript </Chip>
          <Chip> Sql </Chip>
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
