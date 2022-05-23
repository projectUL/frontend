import { FaTimes } from "react-icons/fa";
import classes from "./CloseButton.module.css";

const CloseButton = ({ onClick }) => {
  return (
    <div className={classes.closeButton_wrap} onClick={() => onClick()}>
      <FaTimes />
    </div>
  );
};

export default CloseButton;
