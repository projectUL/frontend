import React, { useState, useEffect } from "react";
import Search from "../components/offers/Search/Search";
import Filter from "../components/offers/Filter/Filter";
import OffersList from "../components/offers/OffersList/OffersList";
import Pagebar from "../components/offers/Pagebar/Pagebar";

const fakeData = [
  {
    id: 1,
    company_name: "Google company",
    offer_name: "Fullstack mitomani",
    logo: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png",
    techs: ["Java", "SpringBoot"],
    created: "09-05-2022",
    isRemote: true,
  },
  {
    id: 2,
    company_name: "Google company",
    offer_name: "Fullstack mitomani",
    logo: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png",
    techs: ["Java", "SpringBoot"],
    created: "09-05-2022",
    isRemote: false,
  },
  {
    id: 3,
    company_name: "Google company",
    offer_name: "Fullstack mitomani",
    logo: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png",
    techs: ["Java", "SpringBoot"],
    created: "09-05-2022",
    isRemote: false,
  },
  {
    id: 4,
    company_name: "Google company",
    offer_name: "Fullstack mitomani",
    logo: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png",
    techs: ["Java", "SpringBoot"],
    created: "09-05-2022",
    isRemote: false,
  },
  {
    id: 5,
    company_name: "Google company",
    offer_name: "Fullstack mitomani",
    logo: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png",
    techs: ["Java", "SpringBoot"],
    created: "09-05-2022",
    isRemote: false,
  },
];

const deafult = {
  keyWords: [],
  category: [],
  jobType: [],
  offers: [],
};

const pagedefault = {
  currentPage: 1,
  pages: 30,
  hasNext: false,
  hasPrevious: false,
};

function OffersPage() {
  const [offersSearch, setOffersSearch] = useState(deafult);
  const [page, setPage] = useState(pagedefault);

  function changePage(page) {
    setPage((lastState) => {
      return { ...lastState, currentPage: page };
    });
  }

  return (
    <div className="wrap-offersPage">
      <Search />
      <div className="content-offersPage">
        <Filter />
        <OffersList data={fakeData} page={page} changePage={changePage} />
      </div>
    </div>
  );
}

export default OffersPage;
