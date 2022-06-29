import React from "react";
import CompaniesItem from "./CompaniesItem";

import classes from "./CompaniesList.module.css";

function CompaniesList(props) {
  console.log("COMPANIElisy", props);
  return (
    <div className={classes.companiesList}>
      {props?.data?.map((element) => {
        return <CompaniesItem key={element.id} {...element} />;
      })}
    </div>
  );
}

export default CompaniesList;
