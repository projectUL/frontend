import { FaTimes } from "react-icons/fa";
import classes from "./CloseButton.module.css";

const CloseButton = (props) => {
  return (
    <div className={classes.closeButton_wrap} onClick={() => props.fun()}>
      <FaTimes />
    </div>
  );
};

export default CloseButton;
