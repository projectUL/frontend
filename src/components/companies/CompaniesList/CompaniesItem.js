import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button";

import classes from "./CompaniesItem.module.css";

function CompaniesItem(props) {
  let navigate = useNavigate();

  function offerNavigate() {
    return navigate("/companies/1");
  }

  return (
    <div className={`defaultBox ${classes.companiesItem}`}>
      <div className={classes.companyDetails}>
        <div className={classes.img}>
          <img src={props.logo} alt="logo" />
        </div>
        <div className={classes.description}>
          <div>{props.company_name}</div>
          <div>{props.website}</div>
        </div>
      </div>
      <Button className={classes.btn} onClick={offerNavigate}>
        {`${props.active_offers} Job Posted`}
      </Button>
    </div>
  );
}

export default CompaniesItem;
