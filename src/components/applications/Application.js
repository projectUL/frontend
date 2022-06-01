import React from "react";

import classes from "./Application.module.css";
import StatusChip from "./StatusChip";

function Application(props) {
  return (
    <div className={classes.application}>
      <div className={classes.company}>
        <div className={classes.logo}>
          <img src={props.logo} alt="logo" />
        </div>
        <div className={classes.companyName}>{props.company_name} </div>
      </div>
      <div className={classes.appInfo}>
        <div className={classes.appDate}>{props.appDate}</div>
        <div className={classes.offerStatus}>
          <div className={classes.offerName}>{props.offer_name}</div>
          <div className={classes.status}>
            <StatusChip>{props.status}</StatusChip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Application;
