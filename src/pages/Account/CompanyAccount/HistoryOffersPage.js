import React, { useState, useCallback, useEffect } from "react";
import CompanyOffersList from "../../../components/offers/CompanyOffersList/CompanyOffersList";
import EditOfferPage from "./EditOfferPage";
import ApplicationsHistory from "./ApplicationsHistory";
import ProfilePageView from "./../../ProfilePageView";
import api from "../../../api/api";
function HistoryOffersPage(props) {
  const [page, setPage] = useState("offers");
  const [idOffer, setIdOffer] = useState("");
  const [companyInformation, setCompanyInformation] = useState({});
  const [render, setRender] = useState(false);
  const [application, setApplication] = useState([]);
  const [email, setEmail] = useState("");

  const dataAPI = useCallback(async () => {
    const response = await api.getCompanyProfile(localStorage.getItem("email"));
    console.log(response);
    if (response.status === 200) {
      const response2 = await api.getCompanyJobs(response.data.data.companyName);
      console.log("JOBS", response2);
      if (response2.status === 200) {
        setCompanyInformation(response2.data);
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
  console.log(companyInformation);
  return (
    <>
      {render && page === "offers" ? (
        <CompanyOffersList
          myOffersPage={props.myOffersPage}
          companyOffers={companyInformation}
          changePage={changePage}
          setIdOffer={setIdOffer}
          setApplication={setApplication}
        />
      ) : null}
      {page === "edit" || page === "renew" ? <EditOfferPage changePage={changePage} idOffer={idOffer} /> : null}
      {page === "applications" ? (
        <ApplicationsHistory
          changePage={changePage}
          companyInformation={companyInformation}
          idOffer={idOffer}
          setEmail={setEmail}
          application={application}
        />
      ) : null}
      {page === "see" ? <ProfilePageView changePage={changePage} email={email} /> : null}
    </>
  );
}

export default HistoryOffersPage;
