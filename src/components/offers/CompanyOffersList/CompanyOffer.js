import React from "react";
import CloseButton from "../../profile/CloseButton";
import Button from "../../UI/Button";

import classes from "./CompanyOffer.module.css";

function CompanyOffer(props) {
  function setPageAndId(value) {
    props.changePage(value);
    props.setIdOffer(props.id);
  }
  return (
    <div className={classes.offer}>
      <div>{props.name}</div>
      <div>{`${props.numberOfApplications} applications`}</div>
      <div className={classes.ends}>
        <div>Ends</div>
        <div>{props.ends}</div>
      </div>
      <div>
        {props.myOffersPage === "current" && <Button onClick={() => setPageAndId("edit")}>Edit</Button>}
        {props.myOffersPage === "history" && <Button onClick={() => setPageAndId("renew")}>Renew</Button>}
      </div>
      <div>
        <Button onClick={() => setPageAndId("applications")}>See application</Button>
      </div>
      <div>
        <CloseButton />
      </div>
    </div>
  );
}

export default CompanyOffer;
