import React from "react";
import "./curated.css";
import DailyItem from "./components/daily-item";
import SavedItem from "./components/saved-item";

const Curated = () => {
  return (
    <div className="curated-body">
      <div className="left">
        <div className="title">Your Daily Read</div>
        <DailyItem />
        <DailyItem />
        <DailyItem />
        <DailyItem />
        <DailyItem />
      </div>
      <div className="right">
        <div className="title">Saved</div>
        <div className="saved-items">
          <SavedItem />
          <SavedItem />
          <SavedItem />
          <SavedItem />
          <SavedItem />
        </div>
      </div>
    </div>
  );
};

export default Curated;
