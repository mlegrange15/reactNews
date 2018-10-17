import React, { Component } from "react";
import "./Saved.css";
import { Container, Card, CardTitle } from "reactstrap";

class Saved extends Component {
  render() {
    return (
      <Container>
        <Card body className="bg-dark text-white">
          <CardTitle className="text-center">SAVED</CardTitle>
        </Card>
      </Container>
    );
  }
}

export default Saved;
