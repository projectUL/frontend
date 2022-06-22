import classes from "./ExperienceProfileView.module.css";
import logo from "./../../images/logoCompany.png";
import moment from "moment";
const ExperienceProfileView = (props) => {
  return (
    <div className={classes.wrap}>
      {/* <img src={logo} alt="" /> */}
      <p>{props.exp.companyName}</p>
      <p>{props.exp.position}</p>
      <p>{`${moment(props.exp.startDate).format("DD.MM.YYYY")} - ${moment(props.exp.endDate).format("DD.MM.YYYY")}`}</p>
    </div>
  );
};

export default ExperienceProfileView;
