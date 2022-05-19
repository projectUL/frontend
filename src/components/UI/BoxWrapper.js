import React from "react";

import classes from "./BoxWrapper.module.css";

function BoxWrapper(props) {
  return (
    <div className={`${classes.box} ${props.className}`}>{props.children}</div>
  );
}

export default BoxWrapper;
