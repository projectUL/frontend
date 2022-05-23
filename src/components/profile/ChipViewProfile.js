import React from "react";
import { FaTimes } from "react-icons/fa";
import classes from "./../UI/Chip.module.css";

function ChipViewProfile(props) {
  return <div className={classes.chip}>{props.children}</div>;
}

export default ChipViewProfile;
