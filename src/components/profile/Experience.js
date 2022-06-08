import classes from "./Experience.module.css";
import ButtonDelete from "./../UI/ButtonDelete";
const Experience = (props) => {
  return (
    <div className={classes.experience_wrap}>
      <p>{props.data.companyName}</p>
      <p>{props.data.position}</p>
      <p>{`${props.data.start} - ${props.data.end}`}</p>
      <ButtonDelete delete={props.delete} />
    </div>
  );
};

export default Experience;
