import React from "react";
import Button from "../UI/Button";

import classes from "./JobDetails.module.css";

function JobDetails(props) {
  return (
    <div className={`defaultBox ${classes.jobDetails}`}>
      <div className={classes.title}>Job Detail</div>

      <div className={classes.property}>
        <div className={classes.name}>Job Type</div>
        <div className={classes.value}>{props.jobType} </div>
      </div>

      <div className={classes.property}>
        <div className={classes.name}>Location</div>
        <div className={classes.value}>{props.location} </div>
      </div>

      <div className={classes.property}>
        <div className={classes.name}>Starts</div>
        <div className={classes.value}>{props.starts} </div>
      </div>

      <div className={classes.property}>
        <div className={classes.name}>Ends</div>
        <div className={classes.value}>{props.ends} </div>
      </div>

      <div className={classes.property}>
        <div className={classes.name}>Salary</div>
        <div className={classes.value}>{`${props.minSalary} $ - ${props.maxSalary} $`}</div>
      </div>

      <div className={classes.property}>
        <div className={classes.name}>Number of candidates</div>
        <div className={classes.value}>{props.numberOfCandidates} </div>
      </div>
      <div className={classes.action}>
        <Button className={classes.btn} onClick={props.onClick}>
          Apply job
        </Button>
      </div>
    </div>
  );
}

export default JobDetails;
