import React from "react";
import Button from "../UI/Button";

import classes from "./JobDetails.module.css";

import moment from "moment";

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
        <div className={classes.value}>{moment(props.starts).format("DD.MM.YYYY")} </div>
      </div>

      <div className={classes.property}>
        <div className={classes.name}>Ends</div>
        <div className={classes.value}>{moment(props.ends).format("DD.MM.YYYY")} </div>
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
        {props.accessLevel === 1 ? (
          <Button className={classes.btn} onClick={() => props.apply()}>
            Apply job
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export default JobDetails;
