import React from "react";
import SectionText from "../UI/SectionText";

import classes from "./CompanyCard.module.css";

function CompanyCard(props) {
  console.log("TESTW", props);
  return (
    <div className={`defaultBox ${classes.companyCard}`}>
      <div className={classes.companyDetails}>
        <div className={classes.data}>
          <div className={classes.img}>
            <img src={props.companyLogo} alt="logo" />
          </div>
          <div className={classes.description}>
            <div>{props.companyName}</div>
            <div>{props.companyWebsite}</div>
          </div>
        </div>
        <div className={classes.activeOffers}>{`${props.jobs !== null ? props.jobs.length : 0} Job Posted`}</div>
      </div>
      <SectionText title="Company Overview" content={props.companyOverview} className={classes.companyOverview} />
    </div>
  );
}

export default CompanyCard;
