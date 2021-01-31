import React from "react";
import { Badge } from "evergreen-ui";

const DocIcon = () => {
  return (
    <div className="doc-icon-container">
      <div className="doc-icon">
        <div className="icon">
          <i className="fas fa-file-pdf"></i>
        </div>
        <div className="topic">Global Warming</div>
        <div className="title">this-is-global-warming.pdf</div>
      </div>
      <div className="hashtags">
        <div className="badge">
          <Badge color="teal" marginRight={4} isInteractive>
            #Global_Warming
          </Badge>
        </div>
        <div className="badge">
          <Badge color="teal" marginRight={4} isInteractive>
            #Stuff
          </Badge>
        </div>
        <div className="badge">
          <Badge color="teal" marginRight={4} isInteractive>
            #KuchToHai
          </Badge>
        </div>
        <div className="badge">
          <Badge color="teal" marginRight={4} isInteractive>
            #K
          </Badge>
        </div>
        <div className="badge">
          <Badge color="teal" marginRight={4} isInteractive>
            #apple
          </Badge>
        </div>
        <div className="badge">
          <Badge color="teal" marginRight={4} isInteractive>
            #banana
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default DocIcon;
