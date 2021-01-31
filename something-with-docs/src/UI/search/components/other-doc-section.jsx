import React from "react";
import { Badge } from "evergreen-ui";

const OtherDocs = () => {
  return (
    <div className="otherdoc-section">
      <div className="icon">
        <i className="fas fa-file-pdf"></i>
      </div>
      <div className="text">
        <div className="doc-title">Global Warming</div>
        <div className="doc-item-hashtags">
          <Badge color="teal" marginRight={4}>
            Global_Warming
          </Badge>
          <Badge color="teal" marginRight={4}>
            Stuff
          </Badge>
          <Badge color="teal" marginRight={4}>
            KuchToHai
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default OtherDocs;
