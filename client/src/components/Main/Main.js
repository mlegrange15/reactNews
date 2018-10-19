import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Saved from "../Saved";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </main>
    );
  }
}

export default Main;
