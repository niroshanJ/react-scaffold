import React from 'react';
import { Helmet } from "react-helmet";
import './style.css';

class ArticleList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articleList: this.props.articleList
    };
  }

  render() {
    return (
      <div class='article-list p-1'>
        {this.state.articleList.map((article, index) => (
          <div class='list-article'>
            <img class="img-fluid rounded shadow" src={article.image} alt={article.title} />
            <h1 class='h4 mt-2'>{article.title}</h1>
            <p class='text-small'>
              {article.shortDescription}
            </p>
            <p>
              <strong>
                {article.createdDate}
              </strong>
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default ArticleList;