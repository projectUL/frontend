import React from "react";
import SectionText from "../UI/SectionText";

import classes from "./CompanyCard.module.css";

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function CompanyCard(props) {
  return (
    <div className={`defaultBox ${classes.companyCard}`}>
      <div className={classes.companyDetails}>
        <div className={classes.data}>
          <div className={classes.img}>
            <img src={props.logo} alt="logo" />
          </div>
          <div className={classes.description}>
            <div>{props.company_name}</div>
            <div>{props.website}</div>
          </div>
        </div>
        <div
          className={classes.activeOffers}
        >{`${props.active_offers} Job Posted`}</div>
      </div>
      <SectionText
        title="Company Overview"
        content={content}
        className={classes.companyOverview}
      />
    </div>
  );
}

export default CompanyCard;
