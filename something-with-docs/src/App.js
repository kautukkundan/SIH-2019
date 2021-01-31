import React from "react";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { StoreProvider, createStore } from "easy-peasy";
import globalStore from "./stores/globalStore";
import Home from "./UI/home/home";
import Login from "./UI/Login/login";

const store = createStore(globalStore);

function App() {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
