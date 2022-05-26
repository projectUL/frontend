import ButtonDelete from "./../UI/ButtonDelete";
import classes from "./Skill.module.css";
const SkillViewProfile = () => {
  return (
    <div className={classes.skillWrap}>
      <p className={classes.title} style={{ fontSize: "1.3rem" }}>
        Angielski
      </p>
      <div className={classes.flex}>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
      </div>
    </div>
  );
};

export default SkillViewProfile;
