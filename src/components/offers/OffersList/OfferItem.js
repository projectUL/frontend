import React, { useEffect, useState, useCallback } from "react";

import classes from "./OfferItem.module.css";
import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";

import api from "../../../api/api";
import moment from "moment";

function OfferItem({ id }) {
  let navigate = useNavigate();

  const [offer, setOffer] = useState({});
  const [errorApi, setErroApi] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const dataAPI = useCallback(async () => {
    const response = await api.getOfferById(id);

    if (response.hasOwnProperty("error")) {
      setErroApi(true);
      return;
    }

    setIsLoading(false);
    console.log(response);
    setOffer(response.data);
  }, []);

  useEffect(() => {
    dataAPI();
  }, [dataAPI]);

  function offerNavigate() {
    return navigate(`/offers/${id}`);
  }

  return (
    <div className={`defaultBox ${classes.item}`}>
      {isLoading ? (
        <p>Laduje dane</p>
      ) : (
        <>
          <div className={classes.logo}>
            <img src={offer.companyLogo} alt={offer.offerTitle} />
          </div>
          <div className={classes.mid}>
            <div className={classes.offerName}>{offer.offerTitle}</div>
            <div className={classes.companyInfo}>
              {offer.companyName}
              <div className={classes.remote}>{offer.jobType}</div>
            </div>
            <div className={classes.techs}>
              {offer.tags.map((tag) => (
                <div className={classes.techItem} key={tag}>
                  {tag}
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
            <div>{`Posted ${moment(offer.created).format("DD.MM.YYYY")}`}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default OfferItem;
