import React from "react";

import classes from "./OfferItem.module.css";
import Button from "../../UI/Button";

function OfferItem(props) {
  return (
    <div className={`defaultBox ${classes.item}`}>
      <div className={classes.logo}>
        <img src={props.logo} alt={props.offer_name} />
      </div>
      <div className={classes.mid}>
        <div className={classes.offerName}>{props.offer_name}</div>
        <div className={classes.companyInfo}>
          {props.company_name} {props.isRemote && <div className={classes.remote}>Remote</div>}
        </div>
        <div className={classes.techs}>
          {props.techs.map((tech) => (
            <div className={classes.techItem}>{tech}</div>
          ))}
        </div>
      </div>
      <div className={classes.right}>
        <div>
          <Button className={classes.btn}>See More</Button>
        </div>
        <div>{`Posted ${props.created}`}</div>
      </div>
    </div>
  );
}

export default OfferItem;
