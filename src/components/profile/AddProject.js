import classes from "./AddProject.module.css";
import { FaPlus } from "react-icons/fa";
import CloseButton from "./CloseButton";
import ButtonAdd from "./../UI/ButtonAdd";
import Button from "./../UI/Button";
import Chip from "./../UI/Chip";

const AddProject = ({ setAddProjectDisplay }) => {
  const x = () => {
    setAddProjectDisplay(false);
  };
  return (
    <div className={classes.container}>
      <div className={classes.addProjects_wrap}>
        <div className={classes.wrapCloseBtn}>
          <CloseButton onClick={() => x()} />
        </div>
        <form className={classes.form}>
          <div className={classes.firstSection}>
            <div className={classes.addGraphic}>
              <FaPlus />
            </div>
            <div>
              <div className={classes.labelInputWrap}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
              </div>
              <div className={classes.labelInputWrap}>
                <label htmlFor="link">Link to code repository</label>
                <input type="text" id="link" />
              </div>
            </div>
          </div>
          <div className={classes.labelInputWrap}>
            <label htmlFor="description">Description</label>
            <textarea name="" id="description" cols="30" rows="10"></textarea>
          </div>
          <div className={classes.secondSection}>
            <div className={classes.labelInputWrap}>
              <label htmlFor="">Technologies</label>
              <input type="text" id="technologies" />
            </div>
            <div className={classes.btnAddWrap}>
              <ButtonAdd />
            </div>
          </div>
          <div className={classes.technologiesBox}>
            <Chip>Javascript</Chip>
            <Chip>C++</Chip>
            <Chip>Java</Chip>
            <Chip>Javascript</Chip>
            <Chip>C++</Chip>
            <Chip>Java</Chip>
            <Chip>Javascript</Chip>
            <Chip>C++</Chip>
            <Chip>Java</Chip>
          </div>
          <Button>Save</Button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
