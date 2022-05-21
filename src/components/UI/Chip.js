import React from "react";

import classes from "./Chip.module.css";

function Chip(props) {
  function removeChipHandler(val) {
    props.removeChip(val.target.value);
  }

  return (
    <div className={classes.chip}>
      {props.children}
      <button onClick={removeChipHandler} value={props.children}>
        X
      </button>
    </div>
  );
}

export default Chip;
