import classes from "./Filter.module.css";
import Button from "./../../UI/Button";
import ListOfCheckBox from "./ListOfCheckBox";
import { useState } from "react";

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
const defaultFilters = { category: "", jobType: "" };
const Filter = ({ filterHandler }) => {
  const [filters, setFilters] = useState(defaultFilters);
  function handleOnSubmit(event) {
    event.preventDefault();
    filterHandler(filters);
  }
  function handleOnChange(e) {
    if (e.target.dataset.type === "category") setFilters({ ...filters, category: e.target.name });
    else setFilters({ ...filters, jobType: e.target.name });
  }
  return (
    <div className={`defaultBox ${classes.wrap}`}>
      <form onSubmit={handleOnSubmit}>
        <div>
          <p className={classes.h}>Category:</p>
          {category.map((e, i) => (
            <ListOfCheckBox text={e} key={i} handleOnChange={handleOnChange} filters={filters} type="category" />
          ))}
        </div>
        <div>
          <p className={classes.h}>Job type:</p>
          {jobType.map((e, i) => (
            <ListOfCheckBox text={e} key={i} handleOnChange={handleOnChange} filters={filters} type="jobType" />
          ))}
          <Button className={classes.xd}>Filter</Button>
          <Button className={classes.xd} onClick={() => setFilters(defaultFilters)}>
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
