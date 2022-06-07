import classes from "./ErrorMessageForm.module.css";
function ErrorMessageForm({ message }) {
  return <p className={classes.error}>{message}</p>;
}

export default ErrorMessageForm;
