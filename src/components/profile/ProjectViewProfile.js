import classes from "./ProjectViewProfile.module.css";
import git from "./../../../src/images/git.jpg";

const ProjectViewProfile = (props) => {
  let logo1 =
    "https://1757140519.rsc.cdn77.org/pl/blog/wp-content/themes/logaster/img/placeholder.png";

  if (props.data.projectLogo) logo1 = props.data.projectLogo;

  return (
    <div
      className={classes.project_wrap}
      onClick={() => props.onClick(props.data)}
    >
      <img src={logo1} alt="git" />
      <div className={classes.title_wrap}>
        <p className={classes.title}>{props.data.projectName}</p>
      </div>
    </div>
  );
};

export default ProjectViewProfile;
