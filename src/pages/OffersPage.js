import React, { useEffect, useState, useCallback } from "react";
import Search from "../components/offers/Search/Search";
import Filter from "../components/offers/Filter/Filter";
import OffersList from "../components/offers/OffersList/OffersList";
import Pagebar from "../components/offers/Pagebar/Pagebar";

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

const deafult = {
  searchText: "",
  category: [],
  jobType: [],
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
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorApi, setErroApi] = useState(false);

  const dataAPI = useCallback(async () => {
    const response = await api.getAllOffers();
    if (response.hasOwnProperty("error")) {
      setErroApi(true);
      return;
    }
    setOffers(response.data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    dataAPI();
  }, [dataAPI]);

  function changePage(page) {
    setPage((lastState) => {
      return { ...lastState, currentPage: page };
    });
  }

  function searchHandler(text = "") {
    setOffersSearch((lastState) => {
      return { ...lastState, searchText: text };
    });

    console.log(text);
    async function data() {
      const response = await api.getFilterOffers(text, offersSearch.category[0], offersSearch.jobType[0]);
      if (response.hasOwnProperty("error")) {
        setErroApi(true);
        return;
      }
      console.log(response);
      setOffers(response.data.data);
      setIsLoading(false);
    }
    data();
  }

  function filterHandler({ category, jobType }) {
    setOffersSearch({ ...offersSearch, category: [category], jobType: [jobType] });
    async function data() {
      const response = await api.getFilterOffers(offersSearch.searchText, category, jobType);
      if (response.hasOwnProperty("error")) {
        setErroApi(true);
        return;
      }
      setOffers(response.data.data);
      setIsLoading(false);
    }
    data();
  }

  return (
    <div className="wrap-offersPage">
      <Search searchHandler={searchHandler} />
      <div className="content-offersPage">
        <Filter filterHandler={filterHandler} />
        <OffersList data={offers} page={page} changePage={changePage} />
      </div>
      <Pagebar {...page} changePage={changePage} />
    </div>
  );
}

export default OffersPage;
