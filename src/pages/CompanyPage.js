import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CompanyCard from "../components/companies/CompanyCard";
import OffersList from "../components/offers/OffersList/OffersList";
import SectionText from "../components/UI/SectionText";

const fakeData = [
  {
    id: 1,
    company_name: "Google company",
    offer_name: "Fullstack mitomani",
    logo: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png",
    techs: ["Java", "SpringBoot"],
    created: "09-05-2022",
    isRemote: true,
  },
  {
    id: 2,
    company_name: "Google company",
    offer_name: "Fullstack mitomani",
    logo: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png",
    techs: ["Java", "SpringBoot"],
    created: "09-05-2022",
    isRemote: false,
  },
  {
    id: 3,
    company_name: "Google company",
    offer_name: "Fullstack mitomani",
    logo: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png",
    techs: ["Java", "SpringBoot"],
    created: "09-05-2022",
    isRemote: false,
  },
  {
    id: 4,
    company_name: "Google company",
    offer_name: "Fullstack mitomani",
    logo: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png",
    techs: ["Java", "SpringBoot"],
    created: "09-05-2022",
    isRemote: false,
  },
  {
    id: 5,
    company_name: "Google company",
    offer_name: "Fullstack mitomani",
    logo: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png",
    techs: ["Java", "SpringBoot"],
    created: "09-05-2022",
    isRemote: false,
  },
];

const fakeData2 = {
  id: 1,
  company_name: "Google company",
  website: "www.google.com",
  logo: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png",
  active_offers: 3,
};

const pagedefault = {
  currentPage: 1,
  pages: 30,
  hasNext: false,
  hasPrevious: false,
};

function CompanyPage() {
  const { id } = useParams();

  const [page, setPage] = useState(pagedefault);

  function changePage(page) {
    setPage((lastState) => {
      return { ...lastState, currentPage: page };
    });
  }
  return (
    <div className="company_page">
      <CompanyCard {...fakeData2} />
      <SectionText
        className="company_page_jobs"
        title="Jobs:"
        content={
          <OffersList data={fakeData} page={page} changePage={changePage} />
        }
      />
    </div>
  );
}

export default CompanyPage;
