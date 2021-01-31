import React from "react";
import { Badge } from "evergreen-ui";

const DailyItem = () => {
  return (
    <div className="daily-item-body">
      <div className="title">Global Warming</div>
      <br />
      <div className="extract">
        Global warming occurs when carbon dioxide (CO2) and other air pollutants
        and greenhouse gases collect in the atmosphere and absorb sunlight and
        solar radiation that have bounced off the earth’s surface. Normally,
        this radiation would escape into space—but these pollutants, which can
        last for years to centuries in the atmosphere, trap the heat and cause
        the planet to get hotter. That's what's known as the greenhouse effect.
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
  );
};

export default DailyItem;
