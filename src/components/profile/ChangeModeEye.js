import React from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import classes from "./ChangeModeEye.module.css";

function ChangeModeEye(props) {
  function onEyeClickHandler(event) {
    props.changeEyeMode();
  }

  return (
    <div className={classes.container}>
      <button onClick={onEyeClickHandler}>
        <div className={classes.eye}>
          {props.clicked ? <AiFillEyeInvisible /> : <AiFillEye />}
        </div>
      </button>
    </div>
  );
}

export default ChangeModeEye;
