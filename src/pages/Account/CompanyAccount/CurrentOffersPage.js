import React, { useState, useCallback, useEffect } from "react";
import CompanyOffersList from "../../../components/offers/CompanyOffersList/CompanyOffersList";

import EditOfferPage from "./EditOfferPage";
import Applications from "./Applications";
import ProfilePageView from "./../../ProfilePageView";
import api from "../../../api/api";
function CurrentOffersPage(props) {
  const [page, setPage] = useState("offers");
  const [idOffer, setIdOffer] = useState("");
  const [companyInformation, setCompanyInformation] = useState({});
  const [render, setRender] = useState(false);

  const dataAPI = useCallback(async () => {
    const response = await api.getCompanyProfile(localStorage.getItem("email"));
    console.log(response);
    if (response.status === 200) {
      const response2 = await api.getCompanyJobs(response.data.data.companyName);
      console.log("JOBS", response2);
      if (response2.status === 200) {
        setCompanyInformation(response.data.data);
        setRender(true);
      }
    }
  }, []);

  useEffect(() => {
    dataAPI();
  }, [dataAPI]);

  function changePage(value) {
    setPage(value);
  }

  return (
    <>
      {render && page === "offers" ? (
        <CompanyOffersList
          myOffersPage={props.myOffersPage}
          companyOffers={companyInformation.jobs}
          changePage={changePage}
          setIdOffer={setIdOffer}
        />
      ) : null}
      {page === "edit" || page === "renew" ? <EditOfferPage changePage={changePage} idOffer={idOffer} /> : null}
      {page === "applications" ? <Applications changePage={changePage} idOffer={idOffer} setIdOffer={setIdOffer} /> : null}
      {page === "see" ? <ProfilePageView changePage={changePage} idOffer={idOffer} /> : null}
    </>
  );
}

export default CurrentOffersPage;
