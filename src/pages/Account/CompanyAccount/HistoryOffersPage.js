import React, { useState } from "react";
import CompanyOffersList from "../../../components/offers/CompanyOffersList/CompanyOffersList";
import EditOfferPage from "./EditOfferPage";
import Applications from "./Applications";
import ProfilePageView from "./../../ProfilePageView";
const fakeData = [
  {
    id: 1,
    name: "Firebase developer",
    numberOfApplications: 10,
    ends: "05.05.2022",
  },
  {
    id: 2,
    name: "Firebase developer",
    numberOfApplications: 10,
    ends: "05.05.2022",
  },
  {
    id: 3,
    name: "Firebase developer",
    numberOfApplications: 10,
    ends: "05.05.2022",
  },
  {
    id: 4,
    name: "Firebase developer",
    numberOfApplications: 10,
    ends: "05.05.2022",
  },
];

function HistoryOffersPage(props) {
  const [page, setPage] = useState("offers");
  const [idOffer, setIdOffer] = useState("");
  function changePage(value) {
    setPage(value);
  }
  return (
    <>
      {page === "offers" ? (
        <CompanyOffersList myOffersPage={props.myOffersPage} companyOffers={fakeData} changePage={changePage} setIdOffer={setIdOffer} />
      ) : null}
      {page === "edit" || page === "renew" ? <EditOfferPage changePage={changePage} idOffer={idOffer} /> : null}
      {page === "applications" ? <Applications changePage={changePage} idOffer={idOffer} setIdOffer={setIdOffer} /> : null}
      {page === "see" ? <ProfilePageView changePage={changePage} idOffer={idOffer} /> : null}
    </>
  );
}

export default HistoryOffersPage;
