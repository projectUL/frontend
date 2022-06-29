import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import CompanyCard from "../components/companies/CompanyCard";
import OffersList from "../components/offers/OffersList/OffersList";
import SectionText from "../components/UI/SectionText";

import api from "../api/api";

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
const defaultCompany = { companyLogo: "", companyMail: "", companyName: "", companyOverview: "", companyWebsite: "", id: "", jobs: [] };
function CompanyPage() {
  const { id } = useParams();

  const [page, setPage] = useState(pagedefault);
  const [company, setCompany] = useState(defaultCompany);
  const [errorApi, setErroApi] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const dataAPI = useCallback(async () => {
    const response = await api.getCompanyById(id);
    console.log("CompanyID", response);
    if (response.hasOwnProperty("error")) {
      setErroApi(true);
      return;
    }

    setIsLoading(false);
    setCompany(response.data);
  }, []);

  useEffect(() => {
    dataAPI();
  }, [dataAPI, page]);

  function changePage(page) {
    setPage((lastState) => {
      return { ...lastState, currentPage: page };
    });
  }
  console.log("CO JEST", company);
  return (
    <>
      {isLoading ? (
        <p>Laduje dane</p>
      ) : (
        <div className="company_page">
          <CompanyCard {...company} />
          <SectionText className="company_page_jobs" title="Jobs:" content={<OffersList data={company.jobs} page={page} changePage={changePage} />} />
        </div>
      )}
    </>
  );
}

export default CompanyPage;
