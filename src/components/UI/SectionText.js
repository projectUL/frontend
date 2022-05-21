import React from "react";

import classes from "./SectionText.module.css";

function SectionText(props) {
  return (
    <p className={classes.section}>
      <h1>{props.title}</h1>
      <span>{props.content}</span>
    </p>
  );
}

export default SectionText;
