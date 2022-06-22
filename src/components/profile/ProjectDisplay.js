import classes from "./ProjectDisplay.module.css";
import CloseButton from "./CloseButton";
import ChipViewProfile from "./ChipViewProfile";
import git from "./../../../src/images/git.jpg";

import { FaGithub } from "react-icons/fa";
const ProjectDisplay = (props) => {
  console.log(props.data);
  return (
    <div className={classes.container}>
      <div className={classes.project_wrap}>
        <div className={classes.btn_box}>
          <div>
            <CloseButton fun={props.close} />
          </div>
        </div>
        <div className={classes.infoBox}>
          <div className={classes.project_box}>
            <img src={git} alt="" />
            <p className={classes.title}>{props.data.projectName}</p>
            <div className={classes.chipBox}>
              {props.data.projectTech.map((t, i) => (
                <ChipViewProfile key={i}>{t}</ChipViewProfile>
              ))}
            </div>
          </div>
          <p className={classes.desc}>{props.data.projectDesc}</p>
          <div className={classes.github}>
            <FaGithub /> {props.data.projectLink}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
