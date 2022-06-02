import React, { useState } from "react";
import { useParams } from "react-router-dom";
import JobDetails from "../components/offers/JobDetails";
import Button from "../components/UI/Button";
import SectionList from "../components/UI/SectionList";
import SectionText from "../components/UI/SectionText";

const fakeOffer = {
  id: 5,
  company_name: "Google company",
  offer_name: "Fullstack mitomani",
  logo: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png",
  techs: ["Java", "SpringBoot"],
  duties: [
    "mitomania 1",
    "mitomania 1",
    "mitomania 1",
    "mitomania 1",
    "mitomania 1",
  ],
  expectations: ["mitomania 1", "mitomania 1", "mitomania 1", "mitomania 1"],
  weOffer: [
    "mitomania 1",
    "mitomania 1",
    "mitomania 1",
    "mitomania 1",
    "mitomania 1",
    "mitomania 1",
  ],
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
  const { offer, setOffer } = useState(fakeOffer);
  return (
    <div className="offer_page">
      <div>
        <h2>{fakeOffer.offer_name}</h2>
        <h3>{fakeOffer.company_name}</h3>
        <SectionText
          title="Company Overview"
          content={content}
          className="offer_compOverview"
        />
        <SectionList title="Your scope of duties" points={fakeOffer.duties} />
        <SectionList title="Our expectations" points={fakeOffer.expectations} />
        <SectionList title="What we offer" points={fakeOffer.weOffer} />
        <Button className="offer_btn">Apply Job</Button>
      </div>
      <JobDetails {...details} />
    </div>
  );
}

export default OfferPage;
