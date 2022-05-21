import React from "react";

import classes from "./Pagebar.module.css";

function Pagebar(props) {
  const pageList = [];

  let j = 0;
  let k = 0;
  for (let i = -2; i <= 2; i++) {
    if (props.currentPage + i < 1) pageList.push(1 + j++);
    else if (props.currentPage + i > props.pages) k++;
    else pageList.push(props.currentPage + i + j);
  }
  for (let i = 1; i <= k; i++) {
    pageList.unshift(-2 - i + props.currentPage);
  }

  function changePageHandler(event) {
    props.changePage(Number(event.target.value));
  }

  return (
    <div className={classes.pagebar}>
      {props.hasPrevious && (
        <button value={props.currentPage - 1} onClick={changePageHandler}>
          {"<"}
        </button>
      )}
      {pageList.map((el) => (
        <button
          className={el === props.currentPage ? classes.current : ""}
          value={el}
          onClick={changePageHandler}
          key={el}
        >
          {el}
        </button>
      ))}
      {props.hasNext && (
        <button value={props.currentPage + 1} onClick={changePageHandler}>
          {">"}
        </button>
      )}
    </div>
  );
}

export default Pagebar;
