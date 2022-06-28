import React, { useState, useCallback, useEffect } from "react";
import classes from "./CompanyEditProfilePage.module.css";
import Button from "../../../components/UI/Button";

import ErrorMessageForm from "../../../components/UI/ErrorMessageForm";
import api from "../../../api/api";

const defaultCompanyProfile = {
  companyLogo: {
    value: "",
    isEmpty: true,
    errorMessage: "",
  },
  companyName: {
    value: "",
    isEmpty: true,
    errorMessage: "",
  },
  companyMail: {
    value: "",
    isEmpty: true,
    errorMessage: "",
  },
  companyOverview: {
    value: "",
    isEmpty: true,
    errorMessage: "",
  },
  companyWebsite: {
    value: "",
    isEmpty: true,
    errorMessage: "",
  },
};

function CompanyEditProfilePage(props) {
  const [companyProfile, setCompanyProfile] = useState(defaultCompanyProfile);
  const [showError, setShowError] = useState(false);

  // const dataAPI = useCallback(async () => {
  //   const response = await api.getUserProfile(localStorage.getItem("email"));
  //   console.log(response);
  //   if (response.status === 200 && response.data !== {})
  //     setUserProfile({
  //       description: { ...response.data.description },
  //       skills: { ...response.data.skills },
  //       experience: [...response.data.experience],
  //       projects: [...response.data.projects],
  //     });
  // }, []);

  // useEffect(() => {
  //   dataAPI();
  // }, [dataAPI]);

  function handleOnChange(e) {
    setCompanyProfile({
      ...companyProfile,
      [e.target.name]: {
        value: e.target.value,
        isEmpty: e.target.vlue === "",
      },
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (validationForm(companyProfile)) {
      setShowError(true);
      return;
    }
  }

  function validationForm(form) {
    let showError = false;
    for (const input in form) {
      if (form[input].isEmpty) {
        form[input].errorMessage = "Fill in this field.";
        showError = true;
      }
    }
    return showError;
  }
  return (
    <form className={classes.profileDescriptionForm} action="" onSubmit={(e) => handleSubmit(e)}>
      <div className={classes.profileDescriptionForm_FirstSection_Wrap}>
        <div className={classes.profileDescriptionForm_FirstSection_PersonalData}>
          <label htmlFor="logo">Link to company logo</label>
          <input type="text" id="logo" name="companyLogo" value={companyProfile.companyLogo.value} onChange={(e) => handleOnChange(e)} />
          {showError && <ErrorMessageForm message={companyProfile.companyLogo.errorMessage} />}
          <label htmlFor="name">Company name</label>
          <input type="text" id="name" name="companyName" value={companyProfile.companyName.value} onChange={(e) => handleOnChange(e)} />
          {showError && <ErrorMessageForm message={companyProfile.companyName.errorMessage} />}
          <label htmlFor="email">Company email</label>
          <input type="text" id="email" name="companyMail" value={companyProfile.companyMail.value} onChange={(e) => handleOnChange(e)} />
          {showError && <ErrorMessageForm message={companyProfile.companyMail.errorMessage} />}
          <label htmlFor="website">Link to website company</label>
          <input type="text" id="website" name="companyWebsite" value={companyProfile.companyWebsite.value} onChange={(e) => handleOnChange(e)} />
          {showError && <ErrorMessageForm message={companyProfile.companyWebsite.errorMessage} />}
        </div>
      </div>
      <div className={classes.profileDescriptionForm_SecondSection_description}>
        <label htmlFor="description">Company description</label>
        <textarea id="description" name="companyOverview" value={companyProfile.companyOverview.value} onChange={(e) => handleOnChange(e)}></textarea>
        {showError && <ErrorMessageForm message={companyProfile.companyOverview.errorMessage} />}
      </div>
      <Button className={classes.profileDescriptionForm_button}>Save</Button>
    </form>
  );
}

export default CompanyEditProfilePage;
