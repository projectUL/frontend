import ButtonDelete from "./../UI/ButtonDelete";
import classes from "./Skill.module.css";
const SkillViewProfile = (props) => {
  const circle = [];
  let i = 0;
  for (i; i < props.skill.skillLevel; i++) circle.push(<div className={classes.circle} key={i}></div>);
  while (circle.length != 5) {
    circle.push(<div className={classes.circleGrey} key={i++}></div>);
  }
  return (
    <div className={classes.skillWrap}>
      <p className={classes.title} style={{ fontSize: "1.3rem" }}>
        {props.skill.skillName}
      </p>
      {props.skill.skill}
      <div className={classes.flex}>{circle.map((e) => e)}</div>
    </div>
  );
};

export default SkillViewProfile;
