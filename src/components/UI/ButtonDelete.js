import classes from "./ButtonDelete.module.css";
import { FaTimes } from "react-icons/fa";

const ButtonDelete = (props) => {
  return (
    <button className={classes.btnDelete_wrap} onClick={() => props.delete && props.delete(props.value)}>
      <FaTimes className={classes.deleteColor} />
    </button>
  );
};

export default ButtonDelete;
