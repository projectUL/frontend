import React from "react";

import classes from "./OffersList.module.css";
import OfferItem from "./OfferItem";

function OffersList(props) {
  const list = props.data.map((element) => {
    return <OfferItem key={element.id} {...element} />;
  });

  return <div className={classes.offersList}>{list}</div>;
}

export default OffersList;
