import React from "react";
import "./docs.css";
import DocIcon from "./docs-icon";
import { Button } from "semantic-ui-react";
import DateIcon from "./date-label";
import HashtagSorter from "./hashtag-sorter";

const Docs = () => {
  return (
    <div className="docs-body">
      <div className="top">
        <div className="title">All your documents</div>
        <div>
          <Button size="tiny" color="teal">
            Upload
          </Button>
        </div>
      </div>

      <HashtagSorter />

      <br />
      <br />

      <DateIcon />
      <div className="all-docs">
        <DocIcon />
        <DocIcon />
      </div>
      <DateIcon />
      <div className="all-docs">
        <DocIcon />
        <DocIcon />
        <DocIcon />
        <DocIcon />
        <DocIcon />
      </div>
    </div>
  );
};

export default Docs;
