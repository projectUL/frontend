import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Applications.module.css";
import Button from "../../../components/UI/Button";
const fake = [
  { name: "Adam Kowalski", whenApplicated: "05.05.2022", status: "In progress" },
  { name: "Adam Kowalski", whenApplicated: "05.05.2022", status: "In progress" },
  { name: "Adam Kowalski", whenApplicated: "05.05.2022", status: "In progress" },
  { name: "Adam Kowalski", whenApplicated: "05.05.2022", status: "In progress" },
  { name: "Adam Kowalski", whenApplicated: "05.05.2022", status: "In progress" },
  { name: "Adam Kowalski", whenApplicated: "05.05.2022", status: "In progress" },
];
const status = ["oczekuje1", "oczekuje2", "oczekuj3"];
function Applications(props) {
  return (
    <>
      <p className={classes.back} onClick={() => props.changePage("offers")}>
        Back to offers
      </p>
      <div className={classes.wrap}>
        <div className={classes.wrapTitle}>
          <p>Firebase Dev 10 applications</p>
        </div>
        {fake.map((e, i) => (
          <Application key={i} {...e} changePage={props.changePage} setIdOffer={props.setIdOffer} />
        ))}
      </div>
    </>
  );
}

function Application(props) {
  let navigate = useNavigate();
  function handleOnChangeStatus(e) {
    console.log(e.target.value);
  }
  function seeProfile(email) {
    //navigate(`/profile/view/${email}`);
    props.changePage("see");
    props.setIdOffer(email);
  }
  return (
    <div className={classes.wrapApplication}>
      <img src="" alt="" />
      <p>{props.name}</p>
      <div className={classes.date}>
        <p>Application</p>
        <p>{props.whenApplicated}</p>
      </div>
      <Button onClick={() => seeProfile("test@edu.pl")}>See profile</Button>
      <div className={classes.wrapStatus}>
        <p>Status</p>
        <select id="category" onChange={(e) => handleOnChangeStatus(e)}>
          {status.map((c, i) => (
            <option key={i}>{c}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default Applications;
