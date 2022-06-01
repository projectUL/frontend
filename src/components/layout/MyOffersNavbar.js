import React from "react";

import classes from "./ProfileNavbar.module.css";

function MyOffersNavbar(props) {
  function changePage(event) {
    props.changeProfilePage(event.currentTarget.value);
  }

  return (
    <div className={classes.header}>
      <ul className={classes.xd}>
        <li className={props.picked === "current" ? classes.picked : ""}>
          <button value="current" onClick={changePage}>
            Current
          </button>
        </li>
        <li className={props.picked === "history" ? classes.picked : ""}>
          <button value="history" onClick={changePage}>
            History
          </button>
        </li>
      </ul>
    </div>
  );
}

export default MyOffersNavbar;
