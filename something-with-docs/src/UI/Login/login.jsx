import React, { useEffect } from "react";
import "./login.css";

import { useHistory } from "react-router-dom";
import { isLoggedIn } from "../../services/authService";

import LoginBox from "./login-box";
import { Icon } from "semantic-ui-react";

const Login = () => {
  const history = useHistory();
  useEffect(() => {
    const loggedin = isLoggedIn();
    if (loggedin) {
      history.push("/");
    }
  }, [history]);

  return (
    <div className="login-body">
      <div className="right">
        <div className="hero-image">
          <a href="https://www.freepik.com/free-photos-vectors/puzzle">
            <img
              className="hero"
              src={process.env.PUBLIC_URL + "/hero-pic.png"}
              title="Puzzle vector created by slidesgo - www.freepik.com"
              alt=""
            />
          </a>
        </div>
        <br />
        <div className="app-title">
          APP NAME HERE <Icon name="dashboard" />
        </div>
        <span style={{ color: "white", fontSize: "150%", lineHeight: "160%" }}>
          SOME RANDOM SHIT HERE
        </span>
      </div>
      <div className="left">
        <div className="title">SOME MORE RANDOM SHIT HERE</div>
        <div className="login-box">
          <div className="information">
            <h4>How it works?</h4>
            <p>1. Start Editing</p>
          </div>
          <LoginBox />
          <br />
          <br />
        </div>
        <div className="footer">
          Made with <Icon name="heart" />
          by {" "}
          <a href="https://twitter.com/Kautukkundan">Kautuk Kundan</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
