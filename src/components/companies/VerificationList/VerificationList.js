import React from "react";
import VerificationItem from "./VerificationItem";

import classes from "./VerificationList.module.css";

function VerificationList(props) {
  return (
    <div className={classes.list}>
      {props.data.map((element) => {
        return <VerificationItem key={element.companyId} data={element} setReload={props.setReload} reload={props.reload} />;
      })}
    </div>
  );
}

export default VerificationList;
