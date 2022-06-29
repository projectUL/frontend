import React from "react";
import VerificationItem from "./VerificationItem";

import classes from "./VerificationList.module.css";

function VerificationList(props) {
  return (
    <div className={classes.list}>
      {props.data.map((element) => {
        return <VerificationItem key={element.companyId} data={element} />;
      })}
    </div>
  );
}

export default VerificationList;
