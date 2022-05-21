import React from "react";
import Button from "../UI/Button";

import classes from "./JobDetails.module.css";

function JobDetails(props) {
  return (
    <div className={`defaultBox ${classes.jobDetails}`}>
      <div className={classes.title}>Job Detail</div>
      {props.jobProperties.map((property) => {
        return (
          <div className={classes.property} key={property.name}>
            <div className={classes.name}>{property.name}</div>
            <div className={classes.value}>{property.value} </div>
          </div>
        );
      })}
      <div className={classes.action}>
        <Button className={classes.btn} onClick={props.onClick}>
          {" "}
          Apply job{" "}
        </Button>
      </div>
    </div>
  );
}

export default JobDetails;
