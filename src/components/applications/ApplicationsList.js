import React from "react";
import Application from "./Application";

import classes from "./ApplicationsList.module.css";

function ApplicationsList(props) {
  return (
    <div className={classes.list}>
      {props.applications.map((application) => {
        return <Application key={application.offerID} {...application} />;
      })}
    </div>
  );
}

export default ApplicationsList;
