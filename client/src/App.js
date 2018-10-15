import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from './components/Home'
import Saved from './components/Saved'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi!!</h1>
        <Home></Home>
        <Saved></Saved>
      </div>
    );
  }
}

export default App;
