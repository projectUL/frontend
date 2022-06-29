import classes from "./ButtonAdd.module.css";
import { FaPlus } from "react-icons/fa";

const ButtonAdd = (props) => {
  return (
    <button
      className={classes.btnAdd_wrap}
      onClick={(e) => props.add && props.add(e)}
    >
      <FaPlus className={classes.actionColor} />
    </button>
  );
};

export default ButtonAdd;
