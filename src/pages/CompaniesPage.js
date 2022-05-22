import React, { useState } from "react";
import CompaniesList from "../components/companies/CompaniesList/CompaniesList";
import Pagebar from "../components/offers/Pagebar/Pagebar";
import Search from "../components/offers/Search/Search";

const fakeData = [
  {
    id: 1,
    company_name: "Google company",
    website: "www.google.com",
    logo: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png",
    active_offers: 3,
  },
  {
    id: 2,
    company_name: "Google company",
    website: "www.google.com",
    logo: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png",
    active_offers: 3,
  },
  {
    id: 3,
    company_name: "Google company",
    website: "www.google.com",
    logo: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png",
    active_offers: 3,
  },
  {
    id: 4,
    company_name: "Google company",
    website: "www.google.com",
    logo: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png",
    active_offers: 3,
  },
  {
    id: 5,
    company_name: "Google company",
    website: "www.google.com",
    logo: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png",
    active_offers: 3,
  },
];

const pagedefault = {
  currentPage: 1,
  pages: 30,
  hasNext: false,
  hasPrevious: false,
};

function CompaniesPage() {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(pagedefault);

  function searchHandler(text) {
    setSearchText(text);
    console.log(text);
  }

  function changePage(page) {
    setPage((lastState) => {
      return { ...lastState, currentPage: page };
    });
  }

  return (
    <div>
      <Search searchHandler={searchHandler} />
      <CompaniesList data={fakeData} />
      <Pagebar {...page} changePage={changePage} />
    </div>
  );
}

export default CompaniesPage;
