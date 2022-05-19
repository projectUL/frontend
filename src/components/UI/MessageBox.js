import React from "react";
import BoxWrapper from "./BoxWrapper";
import Button from "./Button";

import classes from "./MessageBox.module.css";

function MessageBox(props) {
  return (
    <BoxWrapper className={classes.box}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.content}>{props.content}</div>
      <div className={classes.btn}>
        <Button {...props.btn_options}> {props.btn_name}</Button>
      </div>
    </BoxWrapper>
  );
}

export default MessageBox;
