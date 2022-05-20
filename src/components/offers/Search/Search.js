import React, { useState } from "react";

import BoxWrapper from "../../UI/BoxWrapper.js";

import classes from "./Search.module.css";

function Search(props) {
  const [searchText, setSearchText] = useState();

  function searchHandler(event) {
    event.preventDefault();
    props.searchHandler(searchText);
  }

  function changeSearchTextHandler(e) {
    setSearchText(e.target.value);
  }

  return (
    <BoxWrapper>
      <form onSubmit={searchHandler}>
        <div className={classes.search}>
          <input type="text" placeholder="Search..." value={searchText} onChange={changeSearchTextHandler} className={classes.searchInput} />
        </div>
      </form>
    </BoxWrapper>
  );
}

export default Search;
