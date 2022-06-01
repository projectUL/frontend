import React from "react";

import classes from "./StatusChip.module.css";

function StatusButton(props) {
  let color = "green";
  if (props.children === "Pending") color = "yellow";
  if (props.children === "Rejected") color = "red";

  return (
    <div className={`${classes.btn} ${classes[color]}`} {...props}>
      {props.children}
    </div>
  );
}

export default StatusButton;
