import React from 'react';
import { Helmet } from "react-helmet";
import './style.css';

class Article extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.article.title,
      shortDescription: this.props.article.shortDescription,
      image: this.props.article.image,
      createdDate: this.props.article.createdDate,
      updatedDate: this.props.article.updatedDate,
      description: this.props.article.description
    };
  }
  render() {
    return (
      <div class='article'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{this.state.title}</title>
          <meta name="description" content={this.state.shortDescription} />
        </Helmet>
        <div class='article-header'>
          <img class="img-fluid rounded" src={this.state.image} alt={this.state.title} />
          <h1 class='h3 mt-2'>{this.state.title}</h1>
          <p>
            <small>Created at {this.state.createdDate}</small>
            <br />
            <small>Last updated at {this.state.updatedDate}</small>
          </p>
        </div>
        <div class='article-body'>
          <p>{this.state.description}</p>
        </div>
      </div>
    );
  }
}

export default Article;