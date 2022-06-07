import classes from "./Filter.module.css";
const ListOfCheckBox = (props) => {
  return (
    <label className={classes.container} htmlFor={props.text}>
      <input
        type="radio"
        name={props.text}
        data-type={props.type}
        onChange={(e) => props.handleOnChange(e)}
        checked={props.filters.category === props.text || props.filters.jobType === props.text}
      />
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
