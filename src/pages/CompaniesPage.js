import React, { useEffect, useState, useCallback } from "react";
import CompaniesList from "../components/companies/CompaniesList/CompaniesList";
import Pagebar from "../components/offers/Pagebar/Pagebar";
import Search from "../components/offers/Search/Search";
import api from "../api/api";

const pagedefault = {
  currentPage: 1,
  pages: 1,
  hasNext: false,
  hasPrevious: false,
};

function CompaniesPage() {
  //const [searchText, setSearchText] = useState("");
  const [companies, setCompanies] = useState([]);
  const [page, setPage] = useState(pagedefault);
  const [isLoading, setIsLoading] = useState(true);
  const [errorApi, setErroApi] = useState(false);

  const dataAPI = useCallback(async () => {
    const response = await api.getAllCompany();
    if (response.hasOwnProperty("error")) {
      setErroApi(true);
      return;
    }
    setCompanies(response.data);
    setPage({
      ...page,
      hasNext: response.next,
      pages: response.pages,
      hasPrevious: response.previous,
    });
    setIsLoading(false);
  }, []);

  useEffect(() => {
    dataAPI();
  }, [dataAPI]);

  function searchHandler(text) {
    //setSearchText(text);
    async function data() {
      const response = await api.getCompanyBySearch(text);
      if (response.hasOwnProperty("error")) {
        setErroApi(true);
        return;
      }
      setCompanies(response.data);
      setPage({
        ...page,
        hasNext: response.next,
        pages: response.pages,
        hasPrevious: response.previous,
      });
      setIsLoading(false);
    }
    data();
    console.log(text);
  }

  function changePage(page) {
    setPage((lastState) => {
      return { ...lastState, currentPage: page };
    });
  }
  console.log("COMPANIESPAGE", companies);
  return (
    <div>
      {isLoading ? (
        <p>Laduje dane</p>
      ) : (
        <>
          <Search searchHandler={searchHandler} />
          <CompaniesList data={companies} />
          <Pagebar {...page} changePage={changePage} />
        </>
      )}
    </div>
  );
}

export default CompaniesPage;
