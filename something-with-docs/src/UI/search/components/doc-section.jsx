import React from "react";
import DocItem from "./doc-item";
import OtherDocs from "./other-doc-section";

const DocSection = () => {
  return (
    <div>
      <div className="docsection-main">
        <div className="title">Seen Documents</div>
        <div className="content">
          <DocItem />
          <DocItem />
          <DocItem />
          <DocItem />
        </div>
      </div>

      <div className="docsection-main">
        <div className="title">Seen Documents</div>
        <div className="content">
          <DocItem />
          <DocItem />
          <DocItem />
          <DocItem />
        </div>

        <br />
        <br />

        <div className="title">Similar Documents</div>
        <div className="other-content">
          <OtherDocs />
          <OtherDocs />
          <OtherDocs />
          <OtherDocs />
          <OtherDocs />
        </div>
      </div>
    </div>
  );
};

export default DocSection;
