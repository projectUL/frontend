import classes from "./Filter.module.css";
import Button from "./../../UI/Button";
import ListOfCheckBox from "./ListOfCheckBox";

const category = [
  "Administracja biurowa",
  "Obsługa Klienta",
  "Badania i Rozwój",
  "Finanse",
  "HR",
  "Inne",
  "Inżynieria i Technologia",
  "IT",
  "Logistyka",
  "Marketing i Media",
  "Prawo i administracja",
  "Sprzedaż",
  "Zarządzanie",
  "Konsulting i Strategia",
  "Design Kreacja",
];

const jobType = ["Stationary", "Remote", "Hybrid"];

const Filter = () => {
  return (
    <div className={`defaultBox ${classes.wrap}`}>
      <div>
        <p className={classes.h}>Category:</p>
        {category.map((e, i) => (
          <ListOfCheckBox text={e} key={i} />
        ))}
      </div>
      <div>
        <p className={classes.h}>Job type:</p>
        {jobType.map((e, i) => (
          <ListOfCheckBox text={e} key={i} />
        ))}
        <Button className={classes.xd}>Filter</Button>
      </div>
    </div>
  );
};

export default Filter;
