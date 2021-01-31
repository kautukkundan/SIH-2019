import React from "react";
import { Badge } from "evergreen-ui";

const DocItem = () => {
  return (
    <div className="doc-section">
      <div className="icon">
        <i className="fas fa-file-pdf"></i>
      </div>
      <div className="text">
        <div className="doc-title">Global Warming</div>
        <div className="extract">
          Global warming is a bad thing. We should stop doing global warming.
          Global warming is a bad thing. We should stop doing global warming.
          Global warming is a bad thing. We should stop doing global warming.
        </div>
        <br />
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
          <Badge color="teal" marginRight={4}>
            K
          </Badge>
          <Badge color="teal" marginRight={4}>
            apple
          </Badge>
          <Badge color="teal" marginRight={4}>
            banana
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default DocItem;
