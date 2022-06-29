import React, { useState, useRef, useCallback, useEffect } from "react";
import Button from "../../../components/UI/Button";
import Chip from "../../../components/UI/Chip";

import classes from "./CreateOfferPage.module.css";

import api from "../../../api/api";
import ErrorMessageForm from "../../../components/UI/ErrorMessageForm";
import moment from "moment";
const categoryArray = [
  "Office administration",
  "Customer service",
  "Research & Development",
  "Finance",
  "HR",
  "Other",
  "Engineering & Technology",
  "IT",
  "Logistics",
  "Marketing & Media",
  "Law & Administration",
  "Sales",
  "Management",
  "Consulting & Strategy",
  "Design & Creation",
];

const jobTypeArray = ["Stationary", "Remote", "Hybrid"];
const defaultFormOffer = {
  offerTitle: { value: "", isEmpty: true, messageError: "" },
  location: { value: "", isEmpty: true, messageError: "" },
  starts: { value: "", isEmpty: true, messageError: "" },
  ends: { value: "", isEmpty: true, messageError: "" },
  minSalary: { value: "", isEmpty: true, messageError: "" },
  maxSalary: { value: "", isEmpty: true, messageError: "" },
  numberOfCandidates: { value: "", isEmpty: true, messageError: "" },
  tags: [],
  duties: [],
  expectations: [],
  weOffer: [],
};

function CreateOfferPage(props) {
  const [formOffer, setFormOffer] = useState(defaultFormOffer);
  const [jobType, setJobType] = useState("Office administration");
  const [category, setCategory] = useState("Stationary");
  const [showError, setShowError] = useState(false);
  const [companyInfo, setComapnyInfo] = useState({});
  const tags = useRef(null);
  const duties = useRef(null);
  const expectations = useRef(null);
  const weOffer = useRef(null);

  const dataAPI = useCallback(async () => {
    const response = await api.getCompanyProfile(localStorage.getItem("email"));
    console.log(response);
    if (response.status === 200) {
      setComapnyInfo(response.data.data);
    }
  }, []);

  useEffect(() => {
    dataAPI();
  }, [dataAPI]);

  function handleOnChangeJobDetails(e) {
    setFormOffer({
      ...formOffer,
      [e.target.name]: {
        value: e.target.value,
        isEmpty: e.target.value === "",
        messageError: "",
      },
    });
  }

  function addNewValuetoFormOfferArrays(name) {
    setFormOffer({
      ...formOffer,
      [name.current.name]: [...formOffer[name.current.name], name.current.value],
    });
    name.current.value = "";
  }

  function handleOnChangeCategory(e) {
    setCategory(e.target.value);
  }

  function handleOnChangeJobType(e) {
    setJobType(e.target.value);
  }

  function deleteElement(name, nameArray) {
    setFormOffer({
      ...formOffer,
      [nameArray]: formOffer[nameArray].filter((e) => e !== name),
    });
  }

  function onlyNumber() {
    //dla "" tez zwraca true
    const reg = new RegExp("^[0-9]*$"); //numbers = /^[0-9]+$/;
    formOffer.minSalary.messageError = reg.test(formOffer.minSalary.value) ? "" : "Only numbers.";
    formOffer.maxSalary.messageError = reg.test(formOffer.maxSalary.value) ? "" : "Only numbers.";
    formOffer.numberOfCandidates.messageError = reg.test(formOffer.numberOfCandidates.value) ? "" : "Only numbers.";
    if (formOffer.minSalary.messageError === "" && formOffer.maxSalary.messageError === "" && formOffer.numberOfCandidates.messageError === "")
      return false;
    else return true;
  }

  function compareDate(d1, d2) {
    let isError = false;
    if (d1 === "" || d2 === "") {
      isError = true;
      return isError;
    }

    const start = new Date(d1);
    const end = new Date(d2);
    const x = new Date().toLocaleDateString().split(".").reverse().join("-");
    const currentDate = new Date(x);
    if (start < currentDate) {
      isError = true;
      formOffer.starts.messageError = "The date cannot be earlier than the present date.";
    }
    if (start > end) {
      isError = true;
      formOffer.starts.messageError = "End date must be later than start date.";
    }
    if (d1 === d2) {
      isError = true;
      formOffer.starts.messageError = "The dates cannot be the same.";
    }

    return isError;
  }
  function isEmpty(data) {
    let isError = false;
    for (const key in data) {
      if (data[key].isEmpty) {
        data[key].messageError = "Fill in this field.";
        isError = true;
      }
    }
    return isError;
  }
  async function handleOnSubmit() {
    if (isEmpty(formOffer) || onlyNumber() || compareDate(formOffer.starts.value, formOffer.ends.value)) {
      setShowError(true);
      return;
    }
    const data = {
      offerTitle: formOffer.offerTitle.value,
      companyOverview: companyInfo.companyOverview, //props
      duties: formOffer.duties,
      expectations: formOffer.expectations,
      weOffer: formOffer.weOffer,
      jobDetail: {
        location: formOffer.location.value,
        starts: formOffer.starts.value,
        ends: formOffer.ends.value,
        minSalary: formOffer.minSalary.value,
        maxSalary: formOffer.maxSalary.value,
        numberOfCandidates: formOffer.numberOfCandidates.value,
      },
      category: category,
      jobType: jobType,
      tags: [],
      companyLogo: companyInfo.companyLogo, //props
      companyName: companyInfo.companyName, //props
      applications: [],
      created: new Date().toLocaleDateString().split(".").reverse().join("-"),
    };
    console.log(data);
    const res = await api.postCreateOffer(data);
    console.log(res);
  }
  return (
    <div className={classes.container}>
      <label htmlFor="category">Category</label>
      <div>
        <select className={classes.select} id="category" value={category} onChange={(e) => handleOnChangeCategory(e)}>
          {categoryArray.map((c, i) => (
            <option key={i}>{c}</option>
          ))}
        </select>
      </div>
      <div className="profilePage_line">
        <div className="square"></div>
        <div className="square square_end"></div>
      </div>
      <span className={classes.title}>Job Details</span>

      <div className={classes.jobtype}>
        <div className={classes.leftjt}>
          <div className={classes.input}>
            <label htmlFor="jobtype">Job Type</label>
            <select className={classes.select} id="jobType" value={jobType} onChange={(e) => handleOnChangeJobType(e)}>
              {jobTypeArray.map((jT, i) => (
                <option key={i}>{jT}</option>
              ))}
            </select>
          </div>
          <div className={classes.input}>
            <label htmlFor="offerTitle">Offer title</label>
            <input name="offerTitle" type="text" id="offerTitle" value={formOffer.offerTitle.value} onChange={(e) => handleOnChangeJobDetails(e)} />
            {showError && formOffer.offerTitle.messageError !== "" ? <ErrorMessageForm message={formOffer.offerTitle.messageError} /> : null}
          </div>
          <div className={classes.date}>
            <div className={classes.input}>
              <label htmlFor="minSalary">Min salary</label>
              <input
                name="minSalary"
                type="text"
                id="minSalary"
                className={classes.smallInput}
                value={formOffer.minSalary.value}
                onChange={(e) => handleOnChangeJobDetails(e)}
              />
              {showError && formOffer.minSalary.messageError !== "" ? <ErrorMessageForm message={formOffer.minSalary.messageError} /> : null}
            </div>
            <div className={classes.input}>
              <label htmlFor="maxSalary">Max salary</label>
              <input
                name="maxSalary"
                type="text"
                id="maxSalary"
                className={classes.smallInput}
                value={formOffer.maxSalary.value}
                onChange={(e) => handleOnChangeJobDetails(e)}
              />
              {showError && formOffer.maxSalary.messageError !== "" ? <ErrorMessageForm message={formOffer.maxSalary.messageError} /> : null}
            </div>
          </div>
        </div>
        <div className={classes.rightjt}>
          <div className={classes.date}>
            <div className={classes.input}>
              <label htmlFor="starts">Start</label>
              <input name="starts" type="date" id="starts" value={formOffer.starts.value} onChange={(e) => handleOnChangeJobDetails(e)} />
              {showError && formOffer.starts.messageError !== "" ? <ErrorMessageForm message={formOffer.starts.messageError} /> : null}
            </div>
            <div className={classes.input}>
              <label htmlFor="ends">End</label>
              <input name="ends" type="date" id="ends" value={formOffer.ends.value} onChange={(e) => handleOnChangeJobDetails(e)} />
              {showError && formOffer.ends.messageError !== "" ? <ErrorMessageForm message={formOffer.ends.messageError} /> : null}
            </div>
          </div>
          <div className={classes.input}>
            <label htmlFor="location">Location</label>
            <input name="location" type="text" id="location" value={formOffer.location.value} onChange={(e) => handleOnChangeJobDetails(e)} />
            {showError && formOffer.location.messageError !== "" ? <ErrorMessageForm message={formOffer.location.messageError} /> : null}
          </div>
          <div className={classes.input}>
            <label htmlFor="numberOfCandidates">Number of candidates</label>
            <input
              name="numberOfCandidates"
              type="text"
              id="numberOfCandidates"
              value={formOffer.numberOfCandidates.value}
              onChange={(e) => handleOnChangeJobDetails(e)}
            />
            {showError && formOffer.numberOfCandidates.messageError !== "" ? (
              <ErrorMessageForm message={formOffer.numberOfCandidates.messageError} />
            ) : null}
          </div>
        </div>
      </div>
      <div className="profilePage_line">
        <div className="square"></div>
        <div className="square square_end"></div>
      </div>
      <div>
        <div className={classes.area}>
          <label htmlFor="duties">Duty</label>
          <textarea ref={duties} name="duties" id="duties"></textarea>
          <Button onClick={() => addNewValuetoFormOfferArrays(duties)}>Add</Button>
        </div>
        <div className={classes.chips}>
          {formOffer.duties.map((d, i) => (
            <Chip key={i} removeChip={deleteElement} nameArray="duties">
              {d}
            </Chip>
          ))}
        </div>
        <div className="profilePage_line">
          <div className="square"></div>
          <div className="square square_end"></div>
        </div>
      </div>

      <div>
        <div className={classes.area}>
          <label htmlFor="expectations">Expectations</label>
          <textarea ref={expectations} name="expectations" id="expectations"></textarea>
          <Button onClick={() => addNewValuetoFormOfferArrays(expectations)}>Add</Button>
        </div>
        <div className={classes.chips}>
          {formOffer.expectations.map((e, i) => (
            <Chip key={i} removeChip={deleteElement} nameArray="expectations">
              {e}
            </Chip>
          ))}
        </div>
        <div className="profilePage_line">
          <div className="square"></div>
          <div className="square square_end"></div>
        </div>
      </div>

      <div>
        <div className={classes.area}>
          <label htmlFor="weOffer">Offer</label>
          <textarea ref={weOffer} name="weOffer" id="weOffer"></textarea>
          <Button onClick={() => addNewValuetoFormOfferArrays(weOffer)}>Add</Button>
        </div>
        <div className={classes.chips}>
          {formOffer.weOffer.map((o, i) => (
            <Chip key={i} removeChip={deleteElement} nameArray="weOffer">
              {o}
            </Chip>
          ))}
        </div>
      </div>

      <div className={classes.addOffer}>
        <Button onClick={() => handleOnSubmit()}>Add Offer</Button>
      </div>
    </div>
  );
}

export default CreateOfferPage;
