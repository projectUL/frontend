import React from "react";

import classes from "./AccountNavbar.module.css";

import { FaUserCircle, FaPaperPlane } from "react-icons/fa";
import { BsFillGearFill, BsFillPlusCircleFill } from "react-icons/bs";

function AccountNavbar(props) {
  function changeAccountPage(event) {
    props.changeAccountPage(event.currentTarget.value);
  }

  if (props.admin) {
    return (
      <div className={classes.header}>
        <ul>
          <li>
            <button value="profile" onClick={changeAccountPage}>
              <div className={props.picked === "profile" ? classes.picked : ""}>
                <FaUserCircle />
                <div className={classes.textundericon}>Verifications</div>
              </div>
            </button>
          </li>
          <li>
            <button value="settings" onClick={changeAccountPage}>
              <div
                className={props.picked === "settings" ? classes.picked : ""}
              >
                <BsFillGearFill />
                <div className={classes.textundericon}>Settings</div>
              </div>
            </button>
          </li>
        </ul>
      </div>
    );
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
        {props.company && (
          <li>
            <button value="createOffer" onClick={changeAccountPage}>
              <div
                className={props.picked === "createOffer" ? classes.picked : ""}
              >
                <BsFillPlusCircleFill />
                <div className={classes.textundericon}>Create Offer</div>
              </div>
            </button>
          </li>
        )}
        <li>
          <button value="applications" onClick={changeAccountPage}>
            <div
              className={props.picked === "applications" ? classes.picked : ""}
            >
              <FaPaperPlane />
              <div className={classes.textundericon}>
                {props.company ? "My Offers" : "Applications"}
              </div>
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
