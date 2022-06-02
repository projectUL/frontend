import React from "react";
import Button from "../../../components/UI/Button";
import Chip from "../../../components/UI/Chip";

import classes from "./CreateOfferPage.module.css";

function CreateOfferPage() {
  return (
    <div className={classes.container}>
      <label htmlFor="category">Category</label>
      <div>
        <select className={classes.select} id="category">
          <option>Frontend</option>
          <option>Backend</option>
        </select>
      </div>
      <div className="profilePage_line">
        <div className="square"></div>
        <div className="square square_end"></div>
      </div>
      <span className={classes.title}>Job Details</span>

      <div className={classes.jobtype}>
        <div className={classes.leftjt}>
          <div className={classes.input}>
            <label htmlFor="jobtype">Job Type</label>
            <input type="text" id="jobtype" />
          </div>
          <div className={classes.date}>
            <div className={classes.input}>
              <label htmlFor="start">Start</label>
              <input type="date" id="start" />
            </div>
            <div className={classes.input}>
              <label htmlFor="end">End</label>
              <input type="date" id="end" />
            </div>
          </div>
          <div className={classes.input}>
            <label htmlFor="salary">Salary</label>
            <input type="text" id="salary" />
          </div>
        </div>
        <div className={classes.rightjt}>
          <div className={classes.input}>
            <label htmlFor="location">Location</label>
            <input type="text" id="location" />
          </div>
          <div className={classes.input}>
            <label htmlFor="candidates">Number of candidates</label>
            <input type="text" id="candidates" />
          </div>
        </div>
      </div>
      <div className="profilePage_line">
        <div className="square"></div>
        <div className="square square_end"></div>
      </div>
      <div>
        <div className={classes.area}>
          <label htmlFor="duty">Duty</label>
          <textarea name="" id="duty"></textarea>
          <Button>Add</Button>
        </div>
        <div className={classes.chips}>
          <Chip>Something</Chip>
          <Chip>SomethingElse</Chip>
        </div>
        <div className="profilePage_line">
          <div className="square"></div>
          <div className="square square_end"></div>
        </div>
      </div>

      <div>
        <div className={classes.area}>
          <label htmlFor="expectations">Expectations</label>
          <textarea name="" id="expectations"></textarea>
          <Button>Add</Button>
        </div>
        <div className={classes.chips}>
          <Chip>Something</Chip>
          <Chip>SomethingElse</Chip>
        </div>
        <div className="profilePage_line">
          <div className="square"></div>
          <div className="square square_end"></div>
        </div>
      </div>

      <div>
        <div className={classes.area}>
          <label htmlFor="offer">Offer</label>
          <textarea name="" id="offer"></textarea>
          <Button>Add</Button>
        </div>
        <div className={classes.chips}>
          <Chip>Something</Chip>
          <Chip>SomethingElse</Chip>
        </div>
      </div>

      <div className={classes.addOffer}>
        <Button>Add Offer</Button>
      </div>
    </div>
  );
}

export default CreateOfferPage;
