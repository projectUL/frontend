import classes from "./ButtonAdd.module.css";
import { FaPlus } from "react-icons/fa";

const ButtonAdd = (props) => {
  return (
    <button className={classes.btnAdd_wrap} onClick={() => props.add && props.add()}>
      <FaPlus className={classes.actionColor} />
    </button>
  );
};

export default ButtonAdd;
