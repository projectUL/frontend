import React from "react";

import classes from "./Application.module.css";
import StatusChip from "./StatusChip";
import moment from "moment";
function Application(props) {
  return (
    <div className={classes.application}>
      <div className={classes.company}>
        <div className={classes.logo}>
          <img src={props.companyPic} alt="logo" />
        </div>
        <div className={classes.companyName}>{props.companyName} </div>
      </div>
      <div className={classes.appInfo}>
        <div className={classes.appDate}>{moment(props.appDate).format("DD-MM-YYYY")}</div>
        <div className={classes.offerStatus}>
          <div className={classes.offerName}>{props.jobName}</div>
          <div className={classes.status}>
            <StatusChip>{props.status}</StatusChip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Application;
