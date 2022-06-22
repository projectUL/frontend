import classes from "./Experience.module.css";
import ButtonDelete from "./../UI/ButtonDelete";

import moment from "moment";
const Experience = (props) => {
  return (
    <div className={classes.experience_wrap}>
      <p>{props.data.companyName}</p>
      <p>{props.data.position}</p>
      <p>{`${moment(props.data.startDate).format("DD.MM.YYYY")} - ${moment(props.data.endDate).format("DD.MM.YYYY")}`}</p>
      <ButtonDelete delete={props.delete} value={props.data.companyName} />
    </div>
  );
};

export default Experience;
