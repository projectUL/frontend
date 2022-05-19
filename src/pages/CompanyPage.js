import React from "react";
import { useParams } from "react-router-dom";

function CompanyPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>CompaniesPage id: {id}</h1>
    </div>
  );
}

export default CompanyPage;
