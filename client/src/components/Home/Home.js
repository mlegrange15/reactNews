import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./Home.css";
import API from "../utils/API";
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

        let currentTop5 = [];

        for (let i = 0; i < data.length; i++) {
          const newArticle = {
            headline: data[i].headline.main,
            date: data[i].pub_date,
            url: data[i].web_url
          };

          currentTop5.push(newArticle);
        }
        this.setState({ currentTop5, topic: "", start: "", end: "" });
      });
  };

  handleArticleSave = (e, article) => {
    e.preventDefault();
    console.log(article);

    API.saveArticle({
      title: article.headline,
      date: article.date,
      url: article.url
    })
      .then(res => "Saved")
      .catch(err => console.log(err));
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

        {!this.state.currentTop5.length ? (
          <div />
        ) : (
          <Card body className="bg-dark mb-5">
            <CardTitle className="text-center text-white">RESULTS</CardTitle>
            <a href='/'><button className="btn btn-sm bg-light mb-3">Start New Search</button></a>
            <ListGroup className="text-black">
              {this.state.currentTop5.map(article => {
                return (
                  <ListGroupItem
                    key={article.headline}
                    headline={article.headline}
                    date={article.date}
                    url={article.url}
                  >
                    {article.headline}
                      <Button
                        className="btn btn-danger float-right"
                        id={article}
                        onClick={e => {
                          this.handleArticleSave(e, article);
                        }}
                      ><Link to='/saved' className='text-white'>Save</Link>
                      </Button>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Card>
        )}
      </Container>
    );
  }
}

export default Home;
