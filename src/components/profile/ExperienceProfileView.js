import classes from "./ExperienceProfileView.module.css";
import logo from "./../../images/logoCompany.png";

const ExperienceProfileView = () => {
  return (
    <div className={classes.wrap}>
      <img src={logo} alt="" />
      <p>Junior java developer</p>
      <p>41-12.2415 - 21.21.1542</p>
    </div>
  );
};

export default ExperienceProfileView;
