import React from "react";

import classes from "./OffersList.module.css";
import OfferItem from "./OfferItem";
import Pagebar from "../Pagebar/Pagebar";

function OffersList(props) {
  const list = props.data.map((element) => {
    return <OfferItem key={element.id} {...element} />;
  });

  return (
    <div className={classes.offersList}>
      {list}

      <Pagebar {...props.page} changePage={props.changePage} />
    </div>
  );
}

export default OffersList;
