import classes from "./Project.module.css";
import CloseButton from "./../profile/CloseButton";
import git from "./../../../src/images/git.jpg";
const Project = () => {
  return (
    <div className={classes.project_wrap}>
      <img src={git} alt="git" />
      <div className={classes.title_wrap}>
        <p className={classes.title}>Project</p>
      </div>
      <div className={classes.project}>
        <CloseButton />
      </div>
    </div>
  );
};

export default Project;
