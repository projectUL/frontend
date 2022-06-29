import React from "react";

import classes from "./VerificationItem.module.css";
import { IoCheckmarkCircle } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
function VerificationItem(props) {
  function acceptProfile(event) {}

  function denyProfile(event) {}

  return (
    <div className={classes.item}>
      <div className={classes.itemName}>{props.data.companyName}</div>
      <div className={classes.itemEmail}>{props.data.companyEmail}</div>
      <div className={classes.icons}>
        <button className={classes.accept}>
          <IoCheckmarkCircle onClick={acceptProfile} />
        </button>
        <button className={classes.deny}>
          <AiFillCloseCircle onClick={denyProfile} />
        </button>
      </div>
    </div>
  );
}

export default VerificationItem;
