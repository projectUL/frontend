import classes from "./Filter.module.css";
const ListOfCheckBox = (props) => {
  return (
    <label className={classes.container} htmlFor={props.text}>
      <input type="checkbox" name={props.text} />
      {props.text}
    </label>
    // <label className={classes.container} for={props.text}>
    //   {props.text}
    //   <input type="checkbox" name={props.text} />
    //   <span className={classes.checkmark}></span>
    // </label>
  );
};

export default ListOfCheckBox;
