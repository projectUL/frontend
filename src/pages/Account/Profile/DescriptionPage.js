import React, { useState, useCallback, useEffect } from "react";
import classes from "./DescriptionPage.module.css";
import Button from "./../../../components/UI/Button";

import api from "../../../api/api";

const deafultUserDescriptionData = {
  name: {
    value: "",
    isEmpty: true,
  },
  email: {
    value: "",
    isEmpty: true,
  },
  phonNumber: {
    value: "",
    isEmpty: true,
  },
  descripion: {
    value: "",
    isEmpty: true,
  },
  collage: {
    value: "",
    isEmpty: true,
  },
  direction: {
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
function DescriptionPage() {
  const [userDescriptionDate, setUserDescriptionDate] = useState(deafultUserDescriptionData);
  const [showError, setShowError] = useState(false);
  const [errorApi, setErroApi] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // const dataAPI = useCallback(async () => {

  //   if (!validation(userDate)) {
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

  function handleChange(event) {
    setUserDescriptionDate({
      ...userDescriptionDate,
      [event.target.id]: {
        value: event.target.value,
        isEmpty: event.target.value === "",
      },
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(userDescriptionDate);

    // if (!validation(userDescriptionDate)) {
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

  function validation(data) {
    for (const key in data) {
      if (data[key].isEmpty) return false;
    }
    return true;
  }
  return (
    <form className={classes.profileDescriptionForm} onSubmit={handleSubmit}>
      <div className={classes.profileDescriptionForm_FirstSection_Wrap}>
        <div className={classes.profileDescriptionForm_FirstSection_Wrap_Img}>
          <p className={classes.bigFont}>+</p>
        </div>
        <div className={classes.profileDescriptionForm_FirstSection_PersonalData}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={handleChange} value={userDescriptionDate.name.value} />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" onChange={handleChange} value={userDescriptionDate.email.value} />
          <label htmlFor="phonNumber">Phon number</label>
          <input type="text" id="phonNumber" onChange={handleChange} value={userDescriptionDate.phonNumber.value} />
        </div>
      </div>
      <div className={classes.profileDescriptionForm_SecondSection_description}>
        <label htmlFor="description">Description</label>
        <textarea name="" id="description" onChange={handleChange} value={userDescriptionDate.descripion.value}></textarea>
      </div>
      <div className={classes.profileDescriptionForm_ThirdSection_School}>
        <label htmlFor="college">College</label>
        <input type="text" id="college" onChange={handleChange} value={userDescriptionDate.collage.value} />
        <label htmlFor="direction">Direction</label>
        <input type="text" id="direction" onChange={handleChange} value={userDescriptionDate.direction.value} />
        <div className={classes.startEndCollege_wrap}>
          <div className={classes.startEndCollege}>
            <label htmlFor="start">Start</label>
            <input type="date" id="start" onChange={handleChange} value={userDescriptionDate.start.value} />
          </div>
          <div className={classes.startEndCollege}>
            <label htmlFor="end">End</label>
            <input type="date" id="end" onChange={handleChange} value={userDescriptionDate.end.value} />
          </div>
        </div>
      </div>
      <Button className={classes.profileDescriptionForm_button}>Save</Button>
    </form>
  );
}

export default DescriptionPage;
