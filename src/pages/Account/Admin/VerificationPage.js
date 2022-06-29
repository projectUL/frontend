import React, { useState, useCallback, useEffect } from "react";
import VerificationList from "../../../components/companies/VerificationList/VerificationList";
import api from "../../../api/api";

function VerificationPage() {
  const [companyAccount, setCompanyAccount] = useState([]);
  const [reload, setReload] = useState(false);

  const dataAPI = useCallback(async () => {
    const response = await api.getCompanyToVerify();
    setCompanyAccount(response.data.data);
  }, []);

  useEffect(() => {
    dataAPI();
  }, [dataAPI, reload]);
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
