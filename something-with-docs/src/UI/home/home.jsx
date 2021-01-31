import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import { isLoggedIn } from "../../services/authService";
import { useStoreActions } from "easy-peasy";
import { fetchUserDetails } from "../../services/userService";
import swal from "sweetalert";

import "./home.css";
import SideBar from "./components/sidebar";
import Docs from "../docs/docs";
import Search from "../search/search";
import Curated from "../curated/curated";
import QuizPage from "../quiz/quiz";

const Home = () => {
  const setToken = useStoreActions(action => action.user.setToken);
  const setUser = useStoreActions(action => action.user.setUser);

  const [loading, setLoading] = useState(false);

  const setUserDetails = async userToken => {
    const response = await fetchUserDetails(userToken);
    if (response.status === 200) {
      setUser(response.data);
    } else if (response.status === 401) {
      swal(
        "Unauthorized",
        "you dont have permission to view this page",
        "error"
      );
    }
  };

  const history = useHistory();

  useEffect(() => {
    const userToken = isLoggedIn();

    const dataFetcher = async () => {
      setLoading(true);
      await setToken(userToken);
      await setUserDetails(userToken);
      setLoading(false);
    };

    // if (!userToken) {
    //   history.push("/login");
    // } else {
    //   dataFetcher();
    // }
    //eslint-disable-next-line
  }, []);

  return (
    <div className="home-body">
      <div className="left">
        <SideBar />
      </div>
      <div className="right">
        <div className="site-title">Something With Docs</div>
        <div className="items">
          {/* <Route path="/" component={"a"} /> */}
          <Route path="/docs" component={Docs} />
          <Route path="/search" component={Search} />
          <Route path="/curated" component={Curated} />
          <Route path="/quiz" component={QuizPage} />
          {/* <Route path="/flashcards" component={"a"} /> */}
          {/* <Route path="/handouts" component={""} />  */}
        </div>
      </div>
    </div>
  );
};

export default Home;
