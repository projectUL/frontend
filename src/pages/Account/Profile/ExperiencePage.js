import React from "react";

import classes from "./ExperiencePage.module.css";

import Button from "./../../../components/UI/Button";
import Experience from "./../../../components/profile/Experience";

function ExperiencePage() {
  return (
    <div className={classes.experiencePage_wrap}>
      <form className={classes.profileDescriptionForm} action="">
        <div className={classes.profileDescriptionForm_ThirdSection_School}>
          <label htmlFor="college">Company name</label>
          <input type="text" id="college" />
          <label htmlFor="direction">Position</label>
          <input type="text" id="direction" />
          <div className={classes.startEndCollege_wrap}>
            <div className={classes.startEndCollege}>
              <label htmlFor="start">Start</label>
              <input type="date" id="start" />
            </div>
            <div className={classes.startEndCollege}>
              <label htmlFor="end">End</label>
              <input type="date" id="end" />
            </div>
          </div>
        </div>
        <Button className={classes.profileDescriptionForm_button}>Add</Button>
      </form>
      <div className={classes.exp_wrap}>
        <p className={classes.title}>Experience:</p>
        <Experience />
        <Experience />
        <Experience />
      </div>
    </div>
  );
}

export default ExperiencePage;
