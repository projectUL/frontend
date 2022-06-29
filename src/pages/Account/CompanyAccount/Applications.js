import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Applications.module.css";
import Button from "../../../components/UI/Button";
import api from "../../../api/api";
import moment from "moment";
const status = ["Rejected", "Pending", "Accepted"];

function Applications(props) {
  const [applications, setApplications] = useState([]);
  const [f5, setF5] = useState(false);
  const dataAPI = useCallback(async () => {
    const applicationData = [];
    for (let x of props.application) {
      const res1 = await api.getUserInfoById(x);
      const res2 = await api.getUserProfile(res1.data.email);
      console.log("REs1", res1);
      console.log("REs2", res2);
      const test = res1.data.applications.filter((e) => e.offerID === props.idOffer);
      console.log(test);
      const data = {
        avatar: res2.data.description.avatar,
        name: res2.data.description.name,
        applied: test[0].applied,
        status: test[0].status,
        email: res1.data.email,
        offerID: test[0].offerID,
      };

      applicationData.push(data);
    }

    setApplications(applicationData);
    // const response = await api.getCompanyProfile(localStorage.getItem("email"));
    // console.log(response);
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
  }, [dataAPI, f5]);
  //console.log(xd);
  return (
    <>
      <p className={classes.back} onClick={() => props.changePage("offers")}>
        Back to offers
      </p>
      <div className={classes.wrap}>
        {applications.map((e, i) => (
          <Application key={i} {...e} changePage={props.changePage} setEmail={props.setEmail} setF5={setF5} f5={f5} />
        ))}
      </div>
    </>
  );
}

function Application(props) {
  let navigate = useNavigate();

  function seeProfile(email) {
    //navigate(`/profile/view/${email}`);
    props.changePage("see");
    props.setEmail(email);
  }
  async function handleOnChangeStatus(e) {
    const res = await api.putChangeStatus(props.email, props.offerID, status.indexOf(e.target.value));
    console.log(res);
    props.setF5(!props.f5);
  }

  return (
    <div className={classes.wrapApplication}>
      <img
        src={props.avatar === "" ? "https://www.pngitem.com/pimgs/m/421-4212341_default-avatar-svg-hd-png-download.png" : props.avatar}
        alt="avatar"
      />
      <p>{props.name}</p>
      <div className={classes.date}>
        <p>Application</p>
        <p>{moment(props.applied).format("DD.MM.YYYY")}</p>
      </div>
      <Button onClick={() => seeProfile(props.email)}>See profile</Button>
      <div className={classes.wrapStatus}>
        <p>Status</p>
        <select id="category" onChange={(e) => handleOnChangeStatus(e)} value={props.status}>
          {status.map((c, i) => (
            <option key={i}>{c}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default Applications;
