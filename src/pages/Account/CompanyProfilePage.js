import React, { useState, useCallback, useEffect } from "react";
import MyOffersNavbar from "../../components/layout/MyOffersNavbar";
import CompanyEditProfilePage from "./CompanyAccount/CompanyEditProfilePage";
import CreateOfferPage from "./CompanyAccount/CreateOfferPage";
import CurrentOffersPage from "./CompanyAccount/CurrentOffersPage";
import HistoryOffersPage from "./CompanyAccount/HistoryOffersPage";

import SettingsPage from "./Settings/SettingsPage";

import api from "../../api/api";

function CompanyProfilePage(props) {
  const [myOffersPage, setMyOffersPage] = useState("current");
  const [companyInformation, setCompanyInformation] = useState({});

  function changeMyOffersPage(page) {
    setMyOffersPage(page);
  }
  // const dataAPI = useCallback(async () => {
  //   const response = await api.getUserProfile(localStorage.getItem("email"));
  //   console.log(response);
  //   if (response.status === 200 && response.data !== {})
  //     setUserProfile({
  //       description: { ...response.data.description },
  //       skills: { ...response.data.skills },
  //       experience: [...response.data.experience],
  //       projects: [...response.data.projects],
  //     });
  // }, []);

  // useEffect(() => {
  //   dataAPI();
  // }, [dataAPI]);
  return (
    <>
      <div className="account_page_boxRad">
        {props.accountPage === "profile" && <CompanyEditProfilePage companyInformation={companyInformation} />}
        {props.accountPage === "createOffer" && <CreateOfferPage companyInformation={companyInformation} />}
        {props.accountPage === "applications" && (
          <>
            <MyOffersNavbar changeProfilePage={changeMyOffersPage} picked={myOffersPage} />

            {myOffersPage === "current" && <CurrentOffersPage myOffersPage={myOffersPage} companyInformation={companyInformation} />}
            {myOffersPage === "history" && <HistoryOffersPage myOffersPage={myOffersPage} companyInformation={companyInformation} />}
          </>
        )}
        {props.accountPage === "settings" && <SettingsPage companyInformation={companyInformation} />}
      </div>
    </>
  );
}

export default CompanyProfilePage;
