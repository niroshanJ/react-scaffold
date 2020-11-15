import React from 'react';
import { Helmet } from "react-helmet";
import './style.css';

class ArticleList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articleList: [
        {
          title: 'In enim justo rhoncus ut',
          shortDescription: 'Phasellus consectetuer vestibulum elit. Vivamus in erat ut urna cursus vestibulum. Proin magna. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Duis lobortis massa imperdiet quam.',
          image: 'https://s3.amazonaws.com/99Covers-Facebook-Covers/watermark/26193.jpg',
          createdDate: '2020-10-15 23:51:12',
          updatedDate: '2020-10-15 23:15:21'
        },
        {
          title: 'Nam at tortor in tellus',
          shortDescription: 'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Aenean viverra rhoncus pede. Vestibulum ullamcorper mauris at ligula. Morbi mollis tellus ac sapien. Suspendisse potenti.',
          image: 'https://s3.amazonaws.com/99Covers-Facebook-Covers/watermark/26193.jpg',
          createdDate: '2020-10-15 23:51:12',
          updatedDate: '2020-10-15 23:15:21'
        },
        {
          title: 'In enim justo rhoncus ut',
          shortDescription: 'Phasellus consectetuer vestibulum elit. Vivamus in erat ut urna cursus vestibulum. Proin magna. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Duis lobortis massa imperdiet quam.',
          image: 'https://s3.amazonaws.com/99Covers-Facebook-Covers/watermark/26193.jpg',
          createdDate: '2020-10-15 23:51:12',
          updatedDate: '2020-10-15 23:15:21'
        },
        {
          title: 'Nam at tortor in tellus',
          shortDescription: 'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Aenean viverra rhoncus pede. Vestibulum ullamcorper mauris at ligula. Morbi mollis tellus ac sapien. Suspendisse potenti.',
          image: 'https://s3.amazonaws.com/99Covers-Facebook-Covers/watermark/26193.jpg',
          createdDate: '2020-10-15 23:51:12',
          updatedDate: '2020-10-15 23:15:21'
        }
      ]
    };
  }

  render() {
    return (
      <div class='article-list'>
        {this.state.articleList.map((article, index) => (
          <div class='list-article'>
            <img class="img-fluid rounded shadow" src={article.image} alt={article.title} />
            <h1 class='h3 mt-2'>{article.title}</h1>
            <p>
              <small>{article.createdDate}</small><br />
              {article.shortDescription}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default ArticleList;