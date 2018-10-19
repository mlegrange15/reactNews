import React, { Component } from "react";
import "./Saved.css";
import API from "../utils/API";
import { Container, Card, CardTitle, ListGroup, ListGroupItem, Button } from "reactstrap";

class Saved extends Component {
  state = {
    savedArticles: []
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res => {
        console.log(res);
        let savedArticles = [];
        for (let i = 0; i < res.data.length; i++) {
          const savedArticle = {
            title: res.data[i].title,
            date: res.data[i].date,
            url: res.data[i].url,
          };
          savedArticles.push(savedArticle);
        }
        this.setState({ savedArticles });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Card body className="bg-dark">
          <CardTitle className="text-center text-white">SAVED</CardTitle>
          <a href='/'><button className="btn btn-sm bg-light mb-3">Start New Search</button></a>
          <ListGroup className="text-black">
              {this.state.savedArticles.map(article => {
                return (
                  <ListGroupItem
                    key={article.title}
                    title={article.title}
                    date={JSON.stringify(article)}
                    url={article.url}
                  >
                    {article.title}
                    <a href={article.url} target='_blank'><button className="btn btn-sm bg-dark text-white ml-3">Link</button></a>
                    <Button
                      className="btn btn-danger float-right"
                      id={article}
                    >
                      Delete
                    </Button>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
        </Card>
      </Container>
    );
  }
}

export default Saved;

