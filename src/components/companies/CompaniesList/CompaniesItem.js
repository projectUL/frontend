import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button";

import classes from "./CompaniesItem.module.css";

function CompaniesItem(props) {
  let navigate = useNavigate();

  function offerNavigate() {
    return navigate(`/companies/${props.id}`);
  }
  return (
    <div className={`defaultBox ${classes.companiesItem}`}>
      <div className={classes.companyDetails}>
        <div className={classes.img}>
          <img src={props.companyLogo} alt="logo" />
        </div>
        <div className={classes.description}>
          <div>{props.companyName}</div>
          <div>{props.companyWebsite}</div>
        </div>
      </div>
      <Button className={classes.btn} onClick={offerNavigate}>
        {`${props.jobs !== null ? props.jobs.length : 0} Job Posted`}
      </Button>
    </div>
  );
}

export default CompaniesItem;
