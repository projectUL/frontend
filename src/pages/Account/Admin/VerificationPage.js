import React, { useState, useCallback, useEffect } from "react";
import VerificationList from "../../../components/companies/VerificationList/VerificationList";
import api from "../../../api/api";

function VerificationPage() {
  const [companyAccount, setCompanyAccount] = useState([]);
  const [reload, setReload] = useState(false);

  const dataAPI = useCallback(async () => {
    const response = await api.getCompanyToVerify();
    console.log(response);
    setCompanyAccount(response.data.data);
    // if (response.status === 200) {
    //   const response2 = await api.getCompanyJobs(response.data.data.companyName);
    //   console.log("JOBS", response2);
    //   if (response2.status === 200) {
    //     setCompanyInformation(response2.data);
    //     setRender(true);
    //   }
    // }
  }, []);

  useEffect(() => {
    dataAPI();
  }, [dataAPI]);
  return (
    <>
      <h1 style={{ marginTop: "15px", marginLeft: "15px", padding: "10px" }}>Companies Verification</h1>
      {companyAccount.length === 0 ? (
        <h2 style={{ marginTop: "15px", marginLeft: "15px", padding: "10px" }}>No company to verify.</h2>
      ) : (
        <VerificationList data={companyAccount} setReload={setReload} reload={reload} />
      )}
    </>
  );
}

export default VerificationPage;
