import React from "react";
import CompanyOffersList from "../../../components/offers/CompanyOffersList/CompanyOffersList";

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
  return (
    <>
      <CompanyOffersList
        myOffersPage={props.myOffersPage}
        companyOffers={fakeData}
      />
    </>
  );
}

export default HistoryOffersPage;
