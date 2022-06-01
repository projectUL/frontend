import React from "react";
import ApplicationsList from "../../../components/applications/ApplicationsList";

const fakeData = [
  {
    id: 1,
    company_name: "Google company",
    offer_name: "Fullstack mitomani",
    logo: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png",
    techs: ["Java", "SpringBoot"],
    appDate: "09-05-2022",
    status: "Pending",
  },
  {
    id: 2,
    company_name: "Google company",
    offer_name: "Fullstack mitomani",
    logo: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png",
    techs: ["Java", "SpringBoot"],
    appDate: "09-05-2022",
    status: "Pending",
  },
  {
    id: 3,
    company_name: "Google company",
    offer_name: "Fullstack mitomani",
    logo: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png",
    techs: ["Java", "SpringBoot"],
    appDate: "09-05-2022",
    status: "Pending",
  },
  {
    id: 4,
    company_name: "Google company",
    offer_name: "Fullstack mitomani",
    logo: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png",
    techs: ["Java", "SpringBoot"],
    appDate: "09-05-2022",
    status: "Pending",
  },
  {
    id: 5,
    company_name: "Google company",
    offer_name: "Fullstack mitomani",
    logo: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png",
    techs: ["Java", "SpringBoot"],
    appDate: "09-05-2022",
    status: "Pending",
  },
];

function ApplicationsPage() {
  return (
    <>
      <ApplicationsList applications={fakeData} />
    </>
  );
}

export default ApplicationsPage;
