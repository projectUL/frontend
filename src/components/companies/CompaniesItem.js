import React from "react";
import Button from "../UI/Button";

import classes from "./CompaniesItem.module.css";

function CompaniesItem(props) {
  return (
    <div className={`defaultBox ${classes.companiesItem}`}>
      <div className={classes.companyDetails}>
        <div className={classes.img}>
          <img src={props.logo} />
        </div>
        <div className={classes.description}>
          <div>{props.company_name}</div>
          <div>{props.website}</div>
        </div>
      </div>
      <Button className={classes.btn}>
        {`${props.active_offers} Job Posted`}
      </Button>
    </div>
  );
}

export default CompaniesItem;
