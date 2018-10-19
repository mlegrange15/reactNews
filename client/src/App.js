import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./components/Home";
import Main from "./components/Main";
import Jumbo from "./components/Jumbo";


class App extends Component {
  state = {
    savedArticles: [],
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Jumbo />
          <Home/>
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
