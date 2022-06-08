import classes from "./Project.module.css";
import CloseButton from "./../profile/CloseButton";
import git from "./../../../src/images/git.jpg";
const Project = (props) => {
  return (
    <div className={classes.project_wrap}>
      <img src={git} alt="git" />
      <div className={classes.title_wrap}>
        <p className={classes.title}>{props.data.projectName}</p>
      </div>
      <div className={classes.project}>
        <CloseButton fun={props.delete} />
      </div>
    </div>
  );
};

export default Project;
