import React from "react";

import classes from "./OffersList.module.css";
import OfferItem from "./OfferItem";

function OffersList(props) {
  const list = props.data.map((element) => {
    if (typeof element === "object") return <OfferItem key={element.id} id={element.id} />;
    else return <OfferItem key={element} id={element} />;
  });

  return <div className={classes.offersList}>{list}</div>;
}

export default OffersList;
