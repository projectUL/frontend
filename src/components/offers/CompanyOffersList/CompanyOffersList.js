import React from "react";
import CompanyOffer from "./CompanyOffer";

import classes from "./CompanyOffersList.module.css";

function CompanyOffersList(props) {
  return (
    <div className={classes.container}>
      {props.companyOffers.map((offer) => {
        return (
          <CompanyOffer {...offer} key={offer.id} myOffersPage={props.myOffersPage} changePage={props.changePage} setIdOffer={props.setIdOffer} />
        );
      })}
    </div>
  );
}

export default CompanyOffersList;
