import React from "react";
import { useHistory } from "react-router-dom";

const SideBar = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <div
        className="left-section odd"
        onClick={() => {
          history.push("/");
        }}
      >
        <div className="icon-desc">
          <div className="text">HOME</div>
          <div className="icon">
            <i className="fas fa-home"></i>
          </div>
        </div>
        <div className="jingle">Your Dashboard</div>
      </div>
      <div
        className="left-section even"
        onClick={() => {
          history.push("/docs");
        }}
      >
        <div className="icon-desc">
          <div className="text">DOCS</div>
          <div className="icon">
            <i className="fas fa-file"></i>
          </div>
        </div>
        <div className="jingle">Your Collection</div>
      </div>
      <div
        className="left-section odd"
        onClick={() => {
          history.push("/search");
        }}
      >
        <div className="icon-desc">
          <div className="text">SEARCH</div>
          <div className="icon">
            <i className="fas fa-search-plus"></i>
          </div>
        </div>
        <div className="jingle">Shoot your Queries!</div>
      </div>
      <div
        className="left-section even"
        onClick={() => {
          history.push("/curated");
        }}
      >
        <div className="icon-desc">
          <div className="text">FOR YOU</div>
          <div className="icon">
            <i className="fas fa-star-of-life"></i>
          </div>
        </div>
        <div className="jingle">Specially curated content</div>
      </div>
      <div
        className="left-section odd"
        onClick={() => {
          history.push("/quiz");
        }}
      >
        <div className="icon-desc">
          <div className="text">QUIZ</div>
          <div className="icon">
            <i className="fas fa-question-circle"></i>
          </div>
        </div>
        <div className="jingle">Test your abilities</div>
      </div>
      <div
        className="left-section even"
        onClick={() => {
          history.push("/flashcards");
        }}
      >
        <div className="icon-desc">
          <div className="text">FLASHCARDS</div>
          <div className="icon">
            <i className="fas fa-th-large"></i>
          </div>
        </div>
        <div className="jingle">Super Quick Revision</div>
      </div>
      <div
        className="left-section odd"
        onClick={() => {
          history.push("/handouts");
        }}
      >
        <div className="icon-desc">
          <div className="text">HANDOUTS</div>
          <div className="icon">
            <i className="fab fa-slideshare"></i>
          </div>
        </div>
        <div className="jingle">Sharing is Caring!</div>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
