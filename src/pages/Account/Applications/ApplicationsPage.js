import React, { useState, useCallback, useEffect } from "react";
import ApplicationsList from "../../../components/applications/ApplicationsList";
import api from "../../../api/api";

const fakeData = [
  {
    id: 1,
    company_name: "Google company",
    offer_name: "Fullstack mitomani",
    logo: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png",
    techs: ["Java", "SpringBoot"],
    appDate: "09-05-2022",
    status: "Pending",
  },
  {
    id: 2,
    company_name: "Google company",
    offer_name: "Fullstack mitomani",
    logo: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png",
    techs: ["Java", "SpringBoot"],
    appDate: "09-05-2022",
    status: "Pending",
  },
  {
    id: 3,
    company_name: "Google company",
    offer_name: "Fullstack mitomani",
    logo: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png",
    techs: ["Java", "SpringBoot"],
    appDate: "09-05-2022",
    status: "Pending",
  },
  {
    id: 4,
    company_name: "Google company",
    offer_name: "Fullstack mitomani",
    logo: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png",
    techs: ["Java", "SpringBoot"],
    appDate: "09-05-2022",
    status: "Pending",
  },
  {
    id: 5,
    company_name: "Google company",
    offer_name: "Fullstack mitomani",
    logo: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png",
    techs: ["Java", "SpringBoot"],
    appDate: "09-05-2022",
    status: "Pending",
  },
];

function ApplicationsPage() {
  const [applications, setApplications] = useState([]);
  const dataAPI = useCallback(async () => {
    const response = await api.getUserApplications(localStorage.getItem("email"));
    console.log(response);
    if (response.status === 200) setApplications(response.data.applications);
  }, []);

  useEffect(() => {
    dataAPI();
  }, [dataAPI]);
  console.log(applications);
  return <>{applications.length !== 0 ? <ApplicationsList applications={applications} /> : <p>Loading...</p>}</>;
}

export default ApplicationsPage;
