import React from "react";

import classes from "./ApplicationSent.module.css";
import { GoVerified } from "react-icons/go";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

function ApplicationSent(props) {
  return (
    <>
      <ModalOverlay>
        <h2>
          {props.message}
          <span className={classes.verify}>
            <GoVerified />
          </span>
        </h2>
      </ModalOverlay>
      <Backdrop />
    </>
  );
}

export default ApplicationSent;
