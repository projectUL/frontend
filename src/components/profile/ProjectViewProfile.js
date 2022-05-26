import classes from "./ProjectViewProfile.module.css";
import git from "./../../../src/images/git.jpg";

const ProjectViewProfile = ({ onClick }) => {
  return (
    <div className={classes.project_wrap} onClick={() => onClick()}>
      <img src={git} alt="git" />
      <div className={classes.title_wrap}>
        <p className={classes.title}>Project</p>
      </div>
    </div>
  );
};

export default ProjectViewProfile;
