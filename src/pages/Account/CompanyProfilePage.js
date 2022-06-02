import React, { useState } from "react";
import MyOffersNavbar from "../../components/layout/MyOffersNavbar";
import CompanyEditProfilePage from "./CompanyAccount/CompanyEditProfilePage";
import CreateOfferPage from "./CompanyAccount/CreateOfferPage";
import CurrentOffersPage from "./CompanyAccount/CurrentOffersPage";
import HistoryOffersPage from "./CompanyAccount/HistoryOffersPage";

import SettingsPage from "./Settings/SettingsPage";

function CompanyProfilePage(props) {
  const [myOffersPage, setMyOffersPage] = useState("current");

  function changeMyOffersPage(page) {
    setMyOffersPage(page);
  }

  return (
    <>
      <div className="account_page_boxRad">
        {props.accountPage === "profile" && <CompanyEditProfilePage />}
        {props.accountPage === "createOffer" && <CreateOfferPage />}
        {props.accountPage === "applications" && (
          <>
            <MyOffersNavbar
              changeProfilePage={changeMyOffersPage}
              picked={myOffersPage}
            />

            {myOffersPage === "current" && (
              <CurrentOffersPage myOffersPage={myOffersPage} />
            )}
            {myOffersPage === "history" && (
              <HistoryOffersPage myOffersPage={myOffersPage} />
            )}
          </>
        )}
        {props.accountPage === "settings" && <SettingsPage />}
      </div>
    </>
  );
}

export default CompanyProfilePage;
