import React from "react";

import classes from "./SectionText.module.css";

function SectionText(props) {
  return (
    <div className={classes.section}>
      <h1>{props.title}</h1>
      <div className={classes.content}>{props.content}</div>
    </div>
  );
}

export default SectionText;
