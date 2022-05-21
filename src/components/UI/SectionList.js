import React from "react";

import classes from "./SectionList.module.css";

function SectionList(props) {
  return (
    <div className={classes.section}>
      <h1>{props.title}</h1>
      <ul>
        {props.points.map((el, index) => {
          return <li key={index}>{el}</li>;
        })}
      </ul>
    </div>
  );
}

export default SectionList;
