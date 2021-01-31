import React, { useState } from "react";
import "./search.css";
import { SearchInput } from "evergreen-ui";
import Dropdowns from "./dropdowns";
import DocSection from "./components/doc-section";

const Search = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="search-body">
      <br />
      <div className="search">
        <div className="bar">
          <SearchInput
            placeholder="SEARCH..."
            width="100%"
            height={60}
            className="search-input"
            onChange={e => {
              if (e.target.value === "") {
                setActive(false);
              } else {
                setActive(true);
              }
            }}
          />
          <Dropdowns />
        </div>
        <div className={`results ${active ? "expanded" : ""}`}>
          <DocSection />
        </div>
      </div>
    </div>
  );
};

export default Search;
