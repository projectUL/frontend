import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import JobDetails from "../components/offers/JobDetails";
import Button from "../components/UI/Button";
import SectionList from "../components/UI/SectionList";
import SectionText from "../components/UI/SectionText";
import api from "../api/api";
import moment from "moment";
import ApplicationSent from "./Account/Applications/ApplicationSent";
const fakeOffer = {
  id: 5,
  company_name: "Google company",
  offer_name: "Fullstack mitomani",
  logo: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png",
  techs: ["Java", "SpringBoot"],
  duties: ["mitomania 1", "mitomania 1", "mitomania 1", "mitomania 1", "mitomania 1"],
  expectations: ["mitomania 1", "mitomania 1", "mitomania 1", "mitomania 1"],
  weOffer: ["mitomania 1", "mitomania 1", "mitomania 1", "mitomania 1", "mitomania 1", "mitomania 1"],
  created: "09-05-2022",
  isRemote: false,
};

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const details = {
  jobProperties: [
    { name: "Job Type", value: "Fulltime" },
    { name: "Location", value: "Lodz" },
    { name: "Starts", value: "12-05-2020" },
    { name: "Ends", value: "12-05-2020" },
    { name: "Salary", value: "10 000 $ - 250 000 $" },
    { name: "Number of candidates", value: "10 people" },
  ],
};

function OfferPage() {
  const { id } = useParams();
  const [offer, setOffer] = useState({});
  const [errorApi, setErroApi] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

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
          <div>
            <h2>{offer.offerTitle}</h2>
            <h3>{offer.companyName}</h3>
            <SectionText title="Company Overview" content={offer.companyOverview} className="offer_compOverview" />
            <SectionList title="Your scope of duties" points={offer.duties} />
            <SectionList title="Our expectations" points={offer.expectations} />
            <SectionList title="What we offer" points={offer.weOffer} />
            <Button className="offer_btn" onClick={() => applyToJob()}>
              Apply Job
            </Button>
          </div>
          <JobDetails {...offer.jobDetail} jobType={offer.jobType} apply={applyToJob} />
        </>
      )}
      {showModal && <ApplicationSent message={`The job application ${offer.offerTitle} has been successfully sent.`} />}
    </div>
  );
}

export default OfferPage;
