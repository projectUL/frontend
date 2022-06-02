import React from "react";
import classes from "./CompanyEditProfilePage.module.css";
import Button from "../../../components/UI/Button";

function CompanyEditProfilePage() {
  return (
    <form className={classes.profileDescriptionForm} action="">
      <div className={classes.profileDescriptionForm_FirstSection_Wrap}>
        <div className={classes.profileDescriptionForm_FirstSection_Wrap_Img}>
          <p className={classes.bigFont}>+</p>
        </div>
        <div
          className={classes.profileDescriptionForm_FirstSection_PersonalData}
        >
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
        <textarea name="" id="description"></textarea>
      </div>

      <Button className={classes.profileDescriptionForm_button}>Save</Button>
    </form>
  );
}

export default CompanyEditProfilePage;
