import classes from "./ProjectViewProfile.module.css";
import git from "./../../../src/images/git.jpg";

const ProjectViewProfile = (props) => {
  return (
    <div className={classes.project_wrap} onClick={() => props.onClick(props.data)}>
      <img src={git} alt="git" />
      <div className={classes.title_wrap}>
        <p className={classes.title}>{props.data.projectName}</p>
      </div>
    </div>
  );
};

export default ProjectViewProfile;
