import React from "react";

import classes from "./OfferItem.module.css";
import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";

function OfferItem(props) {
  let navigate = useNavigate();

  function offerNavigate() {
    return navigate("/offers/1");
  }

  return (
    <div className={`defaultBox ${classes.item}`}>
      <div className={classes.logo}>
        <img src={props.logo} alt={props.offer_name} />
      </div>
      <div className={classes.mid}>
        <div className={classes.offerName}>{props.offer_name}</div>
        <div className={classes.companyInfo}>
          {props.company_name}{" "}
          {props.isRemote && <div className={classes.remote}>Remote</div>}
        </div>
        <div className={classes.techs}>
          {props.techs.map((tech) => (
            <div className={classes.techItem} key={tech}>
              {tech}
            </div>
          ))}
        </div>
      </div>
      <div className={classes.right}>
        <div>
          <Button className={classes.btn} onClick={offerNavigate}>
            See More
          </Button>
        </div>
        <div>{`Posted ${props.created}`}</div>
      </div>
    </div>
  );
}

export default OfferItem;
