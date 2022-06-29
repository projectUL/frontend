import React from "react";

import classes from "./VerificationItem.module.css";
import { IoCheckmarkCircle } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import api from "../../../api/api";
import { useState } from "react";

function VerificationItem(props) {
  const [reload, setReload] = useState(false);

  async function acceptProfile(ver, acc) {
    console.log(props.data);
    const res = await api.putCompanyVerify(props.data.companyMail, ver, acc, props.data.companyName);
    console.log(res);
    props.setReload(!props.reload);
  }

  async function denyProfile(ver, acc) {
    const res = await api.putCompanyVerify(props.data.companyMail, ver, acc, props.data.companyName);
    console.log(res);
    props.setReload(!props.reload);
  }

  return (
    <div className={`${classes.item} ${props.data.isVerified ? (props.data.isAccepted ? classes.acceptBg : classes.denyBg) : ""}`}>
      <div className={classes.itemName}>{props.data.companyName}</div>
      <div className={classes.itemEmail}>{props.data.companyMail}</div>
      {!props.data.isVerified && (
        <div className={classes.icons}>
          <button className={classes.accept}>
            <IoCheckmarkCircle onClick={() => acceptProfile(true, true)} />
          </button>
          <button className={classes.deny}>
            <AiFillCloseCircle onClick={() => denyProfile(true, false)} />
          </button>
        </div>
      )}
    </div>
  );
}

export default VerificationItem;
