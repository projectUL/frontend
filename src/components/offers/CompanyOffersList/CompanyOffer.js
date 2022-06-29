import React from "react";
import CloseButton from "../../profile/CloseButton";
import Button from "../../UI/Button";

import classes from "./CompanyOffer.module.css";
import moment from "moment";
function CompanyOffer(props) {
  function setPageAndId(value) {
    props.changePage(value);
    props.setApplication(props.applications);
    props.setIdOffer(props.id);
  }
  return (
    <div className={classes.offer}>
      <div>{props.offerTitle}</div>
      <div>{`${props.applications.length} applications`}</div>
      <div className={classes.ends}>
        <div>Ends</div>
        <div>{moment(props.jobDetail.ends).format("DD.MM.YYYY")}</div>
      </div>
      <div>
        <Button onClick={() => setPageAndId("applications")}>See application</Button>
      </div>
    </div>
  );
}

export default CompanyOffer;
