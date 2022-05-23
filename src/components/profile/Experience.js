import classes from "./Experience.module.css";
import ButtonDelete from "./../UI/ButtonDelete";
const Experience = () => {
  return (
    <div className={classes.experience_wrap}>
      <p>Google</p>
      <p>fullstack</p>
      <p>15.15.2222 - 25.25.2525</p>
      <ButtonDelete />
    </div>
  );
};

export default Experience;
