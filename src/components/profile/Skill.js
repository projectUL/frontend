import ButtonDelete from "./../UI/ButtonDelete";
import classes from "./Skill.module.css";
const Skill = (props) => {
  console.log(props.skill);
  const circle = [];
  let i = 0;
  for (i; i < props.skill.skillLevel; i++) circle.push(<div className={classes.circle} key={i}></div>);
  while (circle.length != 5) {
    circle.push(<div className={classes.circleGrey} key={i++}></div>);
  }
  return (
    <div className={classes.skillWrap}>
      <p className={classes.title}>{props.skill.skillName}</p>
      <div className={classes.flex}>
        {circle.map((e) => e)}
        <div className={classes.ml}>{props.delete ? <ButtonDelete delete={props.delete} /> : <ButtonDelete />}</div>
      </div>
    </div>
  );
};

export default Skill;
