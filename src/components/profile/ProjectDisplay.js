import classes from "./ProjectDisplay.module.css";
import CloseButton from "./CloseButton";
import ChipViewProfile from "./ChipViewProfile";
import git from "./../../../src/images/git.jpg";

import { FaGithub } from "react-icons/fa";
const ProjectDisplay = ({ setProjectDisplay }) => {
  return (
    <div className={classes.container}>
      <div className={classes.project_wrap}>
        <div className={classes.btn_box}>
          <div>
            <CloseButton onClick={() => setProjectDisplay(false)} />
          </div>
        </div>
        <div className={classes.infoBox}>
          <div className={classes.project_box}>
            <img src={git} alt="" />
            <p className={classes.title}>Steamwe</p>
            <div className={classes.chipBox}>
              <ChipViewProfile>Java</ChipViewProfile>
              <ChipViewProfile>C#</ChipViewProfile>
              <ChipViewProfile>PHP</ChipViewProfile>
            </div>
          </div>
          <p className={classes.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, ipsam quidem? Rem iste quisquam consectetur excepturi! Enim ducimus vel
            quos nesciunt necessitatibus suscipit esse autem nihil sit? Quos, consectetur illo. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Accusamus debitis iusto quae consequuntur necessitatibus. Mollitia quas distinctio in voluptatum, laborum nihil id molestiae
            obcaecati at beatae ducimus quisquam dignissimos saepe.
          </p>
          <div className={classes.github}>
            <FaGithub /> sadjasda.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
