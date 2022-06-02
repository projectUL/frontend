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

const deafult = {
  searchtext: "",
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

  function searchHandler(text) {
    setOffersSearch((lastState) => {
      return { ...lastState, searchtext: text };
    });
    console.log(text);
  }

  return (
    <div className="wrap-offersPage">
      <Search searchHandler={searchHandler} />
      <div className="content-offersPage">
        <Filter />
        <OffersList data={fakeData} page={page} changePage={changePage} />
      </div>
      <Pagebar {...page} changePage={changePage} />
    </div>
  );
}

export default OffersPage;
