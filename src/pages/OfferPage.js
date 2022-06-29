import React, { useEffect, useState, useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import JobDetails from "../components/offers/JobDetails";
import Button from "../components/UI/Button";
import SectionList from "../components/UI/SectionList";
import SectionText from "../components/UI/SectionText";
import api from "../api/api";
import moment from "moment";
import ApplicationSent from "./Account/Applications/ApplicationSent";
import AuthContext from "./../components/context/auth-context";

function OfferPage(props) {
  const { id } = useParams();
  const [offer, setOffer] = useState({});
  const [errorApi, setErroApi] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const authCtx = useContext(AuthContext);
  const dataAPI = useCallback(async () => {
    const response = await api.getOfferById(id);
    if (response.hasOwnProperty("error")) {
      setErroApi(true);
      return;
    }
    setOffer(response.data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    dataAPI();
  }, [dataAPI]);
  async function applyToJob() {
    const response2 = await api.getUserApplications(localStorage.getItem("email"));

    let isTrue = response2.data.applications.every((applications) => {
      return applications.offerID !== offer.id;
    });

    if (!isTrue) return;

    console.log("response2", response2);
    const res3 = await api.getUserApplications(localStorage.getItem("email"));
    console.log(res3);
    if (res3.status === 200) {
      const apply = {
        companyName: offer.companyName,
        jobName: offer.offerTitle,
        companyPic: offer.companyLogo,
        status: "Pending",
        applied: moment().toDate(),
        offerID: offer.id,
        userID: res3.data.id,
      };
      const res = await api.putApply(localStorage.getItem("email"), apply);
      console.log(res);
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 2000);
    }
  }

  return (
    <div className="offer_page">
      {isLoading ? (
        <h1>Laduje dane</h1>
      ) : (
        <>
          <div style={{ width: "70%", overflowWrap: "anywhere" }}>
            <h2>{offer.offerTitle}</h2>
            <h3>{offer.companyName}</h3>
            <SectionText title="Company Overview" content={offer.companyOverview} className="offer_compOverview" />
            <SectionList title="Your scope of duties" points={offer.duties} />
            <SectionList title="Our expectations" points={offer.expectations} />
            <SectionList title="What we offer" points={offer.weOffer} />
            {authCtx.accessLevel === 1 ? (
              <Button className="offer_btn" onClick={() => applyToJob()}>
                Apply Job
              </Button>
            ) : null}
          </div>
          <JobDetails {...offer.jobDetail} jobType={offer.jobType} apply={applyToJob} accessLevel={authCtx.accessLevel} />
        </>
      )}
      {showModal && <ApplicationSent message={`The job application ${offer.offerTitle} has been successfully sent.`} />}
    </div>
  );
}

export default OfferPage;
