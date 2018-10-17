import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./components/Home";
import Saved from "./components/Saved";

class App extends Component {
  state = {
    savedArticles: [],
  };
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Hi!!</h1>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
        </div>
      </Router>
    );
  }
}

export default App;
