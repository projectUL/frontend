import React from "react";
import CompanyOffer from "./CompanyOffer";

import classes from "./CompanyOffersList.module.css";

function CompanyOffersList(props) {
  console.log("Wtf", props.companyOffers);
  return (
    <div className={classes.container}>
      {props.companyOffers === null || props.companyOffers.length === 0 ? (
        <h2>You have no offers.</h2>
      ) : (
        props.companyOffers.map((offer) => {
          return (
            <CompanyOffer
              {...offer}
              key={offer.id}
              myOffersPage={props.myOffersPage}
              changePage={props.changePage}
              setIdOffer={props.setIdOffer}
              setApplication={props.setApplication}
            />
          );
        })
      )}
    </div>
  );
}

export default CompanyOffersList;
