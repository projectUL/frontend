import classes from "./ButtonAdd.module.css";
import { FaPlus } from "react-icons/fa";

const ButtonAdd = () => {
  return (
    <div className={classes.btnAdd_wrap}>
      <FaPlus className={classes.actionColor} />
    </div>
  );
};

export default ButtonAdd;
