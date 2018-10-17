import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardTitle,
  ListGroup,
  ListGroupItem
} from "reactstrap";

class Home extends Component {
  state = {
    topic: "",
    start: "",
    end: "",
    currentTop5: []
  };

  handleTopicChange = e => {
    this.setState({ topic: e.target.value });
  };

  handleStartChange = e => {
    this.setState({ start: e.target.value });
  };

  handleEndChange = e => {
    this.setState({ end: e.target.value });
  };

  handleSearchClick = () => {
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?&q=${
          this.state.topic
        }?&begin_date=${this.state.start}?&end_date=${
          this.state.end
        }?&api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931`
      )
      .then(res => {
        const data = res.data.response.docs;

        const newArticle = {
          headline: "",
          date: "",
          url: ""
        };

        newArticle.headline = data.map(obj => obj.headline.main);
        newArticle.date = data.map(obj => obj.pub_date);
        newArticle.url = data.map(obj => obj.web_url);

        console.log(newArticle);

        this.setState({ currentTop5: newArticle });
      });
  };

  render() {
    return (
      <Container>
        <Card body className="bg-dark text-white mb-5">
          <CardTitle className="text-center">SEARCH</CardTitle>
          <Form>
            <Row form>
              <Col md={12}>
                <FormGroup>
                  <Label for="topic">Topic</Label>
                  <Input
                    type="topic"
                    name="topic"
                    value={this.state.topic}
                    id="topic"
                    placeholder="Enter a Topic"
                    onChange={this.handleTopicChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="startYear">Start Year</Label>
              <Input
                type="start"
                name="start"
                value={this.state.start}
                id="startYear"
                placeholder="Example: YYYYMMDD"
                onChange={this.handleStartChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="endYear">End Year</Label>
              <Input
                type="end"
                name="end"
                value={this.state.end}
                id="endYear"
                placeholder="Example: YYYYMMDD"
                onChange={this.handleEndChange}
              />
            </FormGroup>
            <Button className="btn-lg" onClick={this.handleSearchClick}>
              Search
            </Button>
          </Form>
        </Card>
        <Card body className="bg-dark text-white">
          <CardTitle className="text-center">RESULTS</CardTitle>
          <ListGroup>
          {this.state.currentTop5.map(top5 => {
                    return (
                      <ListGroupItem>{top5.headline}</ListGroupItem>
                    );
                  })}
            
          </ListGroup>
        </Card>
      </Container>
    );
  }
}

export default Home;
