import React from "react";
import VerificationList from "../../../components/companies/VerificationList/VerificationList";

const fakeData = [
  {
    companyId: "1",
    companyName: "Google",
    companyEmail: "google@wp.pl",
  },
  {
    companyId: "2",
    companyName: "Google",
    companyEmail: "google@wp.pl",
  },
];

function VerificationPage() {
  return (
    <>
      <h1>Companies Verification</h1>
      <VerificationList data={fakeData} />
    </>
  );
}

export default VerificationPage;
