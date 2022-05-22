import React from "react";

import classes from "./AccountNavbar.module.css";

import { FaUserCircle, FaPaperPlane } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";

function AccountNavbar(props) {
  function changeAccountPage(event) {
    props.changeAccountPage(event.currentTarget.value);
  }

  return (
    <div className={classes.header}>
      <ul>
        <li>
          <button value="profile" onClick={changeAccountPage}>
            <div className={props.picked === "profile" ? classes.picked : ""}>
              <FaUserCircle />
              <div className={classes.textundericon}>Profile</div>
            </div>
          </button>
        </li>
        <li>
          <button value="applications" onClick={changeAccountPage}>
            <div
              className={props.picked === "applications" ? classes.picked : ""}
            >
              <FaPaperPlane />
              <div className={classes.textundericon}>Applications</div>
            </div>
          </button>
        </li>
        <li>
          <button value="settings" onClick={changeAccountPage}>
            <div className={props.picked === "settings" ? classes.picked : ""}>
              <BsFillGearFill />
              <div className={classes.textundericon}>Settings</div>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default AccountNavbar;
