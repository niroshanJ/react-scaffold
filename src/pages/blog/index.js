import React from 'react';
import Article from '../../components/article';
import ArticleList from '../../components/article-list';
import './style.css';

class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainArticle: {
        title: this.props.title,
        shortDescription: "Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh.",
        image: 'https://xeecovers.com/wp-content/uploads/2013/07/Broken-Heart-Clipart.png',
        description: 'Fusce fermentum. Nullam accumsan lorem in dui. Nam commodo suscipit quam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi.',
        createdDate: '2020-10-01 12:34:51',
        updatedDate: '2020-10-01 15:43:15'
      },
      otherArticles: {

      }
    };
  }

  render() {
    return (
      <>
        <div class='container'>
          <div class='row mt-5 p-3 bg-primary'>
          <div class='col-md-1'>a</div>
            <div class='col-md-8'>
              <Article
                article={this.state.mainArticle}
              />
            </div>
            <div class='col-md-3'>
              <ArticleList />
            </div>
          </div>
        </div>
      </>
    );
  }

}

export default Blog;