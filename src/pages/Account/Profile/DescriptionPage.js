import React, { useState, useCallback, useEffect } from "react";
import moment from "moment";
import classes from "./DescriptionPage.module.css";
import Button from "./../../../components/UI/Button";

import api from "../../../api/api";
import ErrorMessageForm from "../../../components/UI/ErrorMessageForm";

import ApplicationSent from "../Applications/ApplicationSent";

const deafultUserDescriptionData = {
  avatar: {
    value: "",
    isEmpty: true,
  },
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

const errorData = {
  avatar: false,
  name: false,
  email: false,
  phoneNumber: false,
  description: false,
  college: false,
  direction: false,
  start: false,
  end: false,
};

function DescriptionPage(props) {
  const [userDescriptionDate, setUserDescriptionDate] = useState(deafultUserDescriptionData);
  const [showError, setShowError] = useState(errorData);
  const [errorApi, setErroApi] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [reloadData, setReloadData] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
        userDataFromDB[key] = {
          value: response.data[key] === null ? "" : response.data[key],
          isEmpty: response.data[key] === "",
        };
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
    setShowError({
      avatar: false,
      name: false,
      email: false,
      phoneNumber: false,
      description: false,
      college: false,
      direction: false,
      start: false,
      end: false,
    });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    //console.log(userDescriptionDate);
    if (validation()) return;

    // if (!validation(userDescriptionDate)) {
    //   setShowError(true);
    //   return;
    // }
    const profileDataForm = createProfileToSend(userDescriptionDate);
    const response = await api.putUserProfileDescription(props.id, profileDataForm);
    console.log(response);
    setShowModal(true);
    setReloadData(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  }

  function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function validatePhoneNumber(phone) {
    let re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    return re.test(phone);
  }

  function validation() {
    const errorObj = {
      avatar: false,
      name: false,
      email: false,
      phoneNumber: false,
      description: false,
      college: false,
      direction: false,
      start: false,
      end: false,
    };

    for (const key in userDescriptionDate) {
      if (key === "avatar") continue;
      if (userDescriptionDate[key].isEmpty) errorObj[key] = true;
    }

    if (!validateEmail(userDescriptionDate.email.value)) errorObj.email = true;
    if (!validatePhoneNumber(userDescriptionDate.phoneNumber.value)) errorObj.phoneNumber = true;

    console.log(errorObj);

    let fdate = new Date(userDescriptionDate.start.value);
    let tdate = new Date(userDescriptionDate.end.value);

    if (fdate.valueOf() > tdate.valueOf() || !userDescriptionDate.start.value || !userDescriptionDate.end.value) {
      errorObj.start = true;
      errorObj.end = true;
    }

    setShowError(errorObj);

    for (let i of Object.values(errorObj)) {
      if (i) return true;
    }
    return false;
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
          {userDescriptionDate.avatar.value && <img src={userDescriptionDate.avatar.value} alt="avatar" />}
          <div className={classes.avatarInput}>
            <input type="text" id="avatar" onChange={handleChange} value={userDescriptionDate.avatar.value} placeholder="avatar link" />
          </div>
        </div>
        <div className={classes.profileDescriptionForm_FirstSection_PersonalData}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={handleChange} value={userDescriptionDate.name.value} />
          {showError.name && <ErrorMessageForm message="Name cannot be empty" />}
          <label htmlFor="email">Email</label>
          <input type="text" id="email" onChange={handleChange} value={userDescriptionDate.email.value} />
          {showError.email && <ErrorMessageForm message="Email address is not valid." />}
          <label htmlFor="phoneNumber">Phon number</label>
          <input type="text" id="phoneNumber" onChange={handleChange} value={userDescriptionDate.phoneNumber.value} />
          {showError.phoneNumber && <ErrorMessageForm message="Phone number is not valid." />}
        </div>
      </div>
      <div className={classes.profileDescriptionForm_SecondSection_description}>
        <label htmlFor="description">Description</label>
        <textarea name="" id="description" onChange={handleChange} value={userDescriptionDate.description.value}></textarea>
        {showError.description && <ErrorMessageForm message="Description cannot be empty." />}
      </div>
      <div className={classes.profileDescriptionForm_ThirdSection_School}>
        <label htmlFor="college">College</label>
        <input type="text" id="college" onChange={handleChange} value={userDescriptionDate.college.value} />
        {showError.college && <ErrorMessageForm message="College cannot be empty." />}
        <label htmlFor="direction">Direction</label>
        <input type="text" id="direction" onChange={handleChange} value={userDescriptionDate.direction.value} />
        <div className={classes.startEndCollege_wrap}>
          <div className={classes.startEndCollege}>
            <label htmlFor="start">Start</label>
            <input type="date" id="start" onChange={handleChange} value={userDescriptionDate.start.value} />
            {showError.start && <ErrorMessageForm message="Invalid date" />}
          </div>
          <div className={classes.startEndCollege}>
            <label htmlFor="end">End</label>
            <input type="date" id="end" onChange={handleChange} value={userDescriptionDate.end.value} />
            {showError.end && <ErrorMessageForm message="Invalid date" />}
          </div>
        </div>
      </div>
      <Button className={classes.profileDescriptionForm_button}>Save</Button>
      {showModal && <ApplicationSent message={"The data has been saved."} />}
    </form>
  );
}

export default DescriptionPage;
