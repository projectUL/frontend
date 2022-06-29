import React from "react";

import classes from "./Pagebar.module.css";

function Pagebar(props) {
  const pageList = props.pages !== 1 ? getPagingRange(props.currentPage, { total: props.pages }) : [];

  function getPagingRange(current, { min = 1, total = 20, length = 5 } = {}) {
    if (length > total) length = total;

    let start = current - Math.floor(length / 2);
    start = Math.max(start, min);
    start = Math.min(start, min + total - length);

    return Array.from({ length: length }, (el, i) => start + i);
  }

  function changePageHandler(event) {
    props.changePage(Number(event.target.value));
  }

  return (
    <div className={classes.pagebar}>
      {props.currentPage - 1 >= 1 && (
        <button value={props.currentPage - 1} onClick={changePageHandler}>
          {"<"}
        </button>
      )}
      {pageList.map((el) => (
        <button className={el === props.currentPage ? classes.current : ""} value={el} onClick={changePageHandler} key={el}>
          {el}
        </button>
      ))}
      {props.currentPage + 1 <= props.pages && (
        <button value={props.currentPage + 1} onClick={changePageHandler}>
          {">"}
        </button>
      )}
    </div>
  );
}

export default Pagebar;
