import classes from "./Project.module.css";
import CloseButton from "./../profile/CloseButton";

const Project = (props) => {
  console.log("mhh", props);

  let logo1 =
    "https://1757140519.rsc.cdn77.org/pl/blog/wp-content/themes/logaster/img/placeholder.png";

  if (props.data.projectLogo) logo1 = props.data.projectLogo;

  return (
    <div className={classes.project_wrap}>
      <img alt="logo" src={logo1} />
      <div className={classes.title_wrap}>
        <p className={classes.title}>{props.data.projectName}</p>
      </div>
      <div className={classes.project}>
        <CloseButton fun={props.delete} value={props.data.projectName} />
      </div>
    </div>
  );
};

export default Project;
