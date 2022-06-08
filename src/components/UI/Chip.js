import React from "react";
import { FaTimes } from "react-icons/fa";
import classes from "./Chip.module.css";

function Chip(props) {
  function removeChipHandler(val) {
    props.removeChip(props.children);
  }

  return (
    <div className={classes.chip}>
      {props.children}
      <div className={classes.ml}>
        <FaTimes
          onClick={(event) => {
            if (props.removeChip) return removeChipHandler(event);
          }}
          value={props.children}
        />
      </div>
    </div>
  );
}

export default Chip;
