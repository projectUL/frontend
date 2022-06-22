import React, { useState, useCallback, useEffect } from "react";
import moment from "moment";
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
  phoneNumber: {
    value: "",
    isEmpty: true,
  },
  description: {
    value: "",
    isEmpty: true,
  },
  college: {
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
function DescriptionPage(props) {
  const [userDescriptionDate, setUserDescriptionDate] = useState(deafultUserDescriptionData);
  const [showError, setShowError] = useState(false);
  const [errorApi, setErroApi] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [reloadData, setReloadData] = useState(false);

  const dataAPI = useCallback(async () => {
    const response = await api.getUserProfileDescription(props.id);
    //console.log(response);
    //console.log(typeof response.data);
    if (typeof response.data !== "object") {
      return;
    }

    const userDataFromDB = {};
    for (const key in response.data) {
      if (key === "start" || key === "end") {
        userDataFromDB[key] = {
          value: response.data[key] === null ? "" : moment(response.data[key]).format("YYYY-MM-DD"),
          isEmpty: response.data[key] === "",
        };
      } else {
        userDataFromDB[key] = { value: response.data[key] === null ? "" : response.data[key], isEmpty: response.data[key] === "" };
      }
    }
    console.log(userDataFromDB);
    setUserDescriptionDate(userDataFromDB);
    // if (response.hasOwnProperty("error")) {
    //   setErroApi(true);
    //   return;
    // }
  }, []);

  useEffect(() => {
    dataAPI();
  }, [dataAPI]);

  function handleChange(event) {
    setUserDescriptionDate({
      ...userDescriptionDate,
      [event.target.id]: {
        value: event.target.value,
        isEmpty: event.target.value === "",
      },
    });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    //console.log(userDescriptionDate);

    // if (!validation(userDescriptionDate)) {
    //   setShowError(true);
    //   return;
    // }
    const profileDataForm = createProfileToSend(userDescriptionDate);
    const response = await api.putUserProfileDescription(props.id, profileDataForm);
    console.log(response);
    setReloadData(true);
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
  function createProfileToSend(obj) {
    const newObj = {};
    for (const key in obj) newObj[key] = obj[key].value;

    return newObj;
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
          <label htmlFor="phoneNumber">Phon number</label>
          <input type="text" id="phoneNumber" onChange={handleChange} value={userDescriptionDate.phoneNumber.value} />
        </div>
      </div>
      <div className={classes.profileDescriptionForm_SecondSection_description}>
        <label htmlFor="description">Description</label>
        <textarea name="" id="description" onChange={handleChange} value={userDescriptionDate.description.value}></textarea>
      </div>
      <div className={classes.profileDescriptionForm_ThirdSection_School}>
        <label htmlFor="college">College</label>
        <input type="text" id="college" onChange={handleChange} value={userDescriptionDate.college.value} />
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
