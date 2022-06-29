import React from "react";

import classes from "./OffersList.module.css";
import OfferItem from "./OfferItem";

function OffersList(props) {
  console.log("OFFERLIST", props);
  const list = props?.data?.map((element) => {
    if (typeof element === "object") return <OfferItem key={element.id} {...element} />;
    else return <OfferItem key={element} id={element} />;
  });

  return <div className={classes.offersList}>{list?.length ? list : <p className={classes.noOffers}>No offers</p>} </div>;
}

export default OffersList;
