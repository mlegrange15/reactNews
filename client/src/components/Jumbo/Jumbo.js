import React, { Component } from 'react';
import { Container, Jumbotron } from 'reactstrap';

class Jumbo extends Component {
    render() { 
        return ( 
            <div>
            <Jumbotron fluid>
              <Container fluid>
                <h1 className="display-3 text-center">New York Times Article Search</h1>
                <p className="lead text-center">Find the articles you want to see by searching the topic and date range below.</p>
              </Container>
            </Jumbotron>
          </div>
         );
    }
}
 
export default Jumbo;