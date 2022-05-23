import React from "react";
import classes from "./DescriptionPage.module.css";
import Button from "./../../../components/UI/Button";

function DescriptionPage() {
  return (
    <form className={classes.profileDescriptionForm} action="">
      <div className={classes.profileDescriptionForm_FirstSection_Wrap}>
        <div className={classes.profileDescriptionForm_FirstSection_Wrap_Img}>
          <p className={classes.bigFont}>+</p>
        </div>
        <div className={classes.profileDescriptionForm_FirstSection_PersonalData}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
          <label htmlFor="phonNumber">Phon number</label>
          <input type="text" id="phonNumber" />
        </div>
      </div>
      <div className={classes.profileDescriptionForm_SecondSection_description}>
        <label htmlFor="description">Description</label>
        <textarea name="" id="description" cols="30" rows="10"></textarea>
      </div>
      <div className={classes.profileDescriptionForm_ThirdSection_School}>
        <label htmlFor="college">College</label>
        <input type="text" id="college" />
        <label htmlFor="direction">Direction</label>
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
      <Button className={classes.profileDescriptionForm_button}>Save</Button>
    </form>
  );
}

export default DescriptionPage;
