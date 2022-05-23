import classes from "./ButtonDelete.module.css";
import { FaTimes } from "react-icons/fa";

const ButtonDelete = () => {
  return (
    <div className={classes.btnDelete_wrap}>
      <FaTimes className={classes.deleteColor} />
    </div>
  );
};

export default ButtonDelete;
