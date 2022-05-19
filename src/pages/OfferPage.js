import React from "react";
import { useParams } from "react-router-dom";

function OfferPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>OfferPage id: {id}</h1>
    </div>
  );
}

export default OfferPage;
