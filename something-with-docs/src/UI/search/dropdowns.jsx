import React from "react";
import { Dropdown } from "semantic-ui-react";

const friendOptions = [
  {
    key: "Currently Reading",
    text: "Currently Reading",
    value: "Currently Reading"
  },
  {
    key: "Everywhere",
    text: "Everywhere",
    value: "Everywhere"
  }
];

const Dropdowns = () => {
  return (
    <div className="dropdown-container">
      <span>
        Search in{" "}
        <Dropdown
          inline
          options={friendOptions}
          defaultValue={friendOptions[0].value}
        />
      </span>
    </div>
  );
};

export default Dropdowns;
