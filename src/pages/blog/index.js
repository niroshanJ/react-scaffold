import React from 'react';
import { Helmet } from "react-helmet";
import { Scrollbars } from 'react-custom-scrollbars';
import ParticlesBg from 'particles-bg';
import Article from '../../components/article';
import ArticleList from '../../components/article-list';
import './style.css';

class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainArticle: {
        title: 'Fusce fermentum. Nullam accumsan lorem in dui',
        shortDescription: "Fusce fermentum. Nullam accumsan lorem in dui. Nam commodo suscipit quam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi.",
        image: 'https://xeecovers.com/wp-content/uploads/2013/07/Broken-Heart-Clipart.png',
        description: 'Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Curabitur blandit mollis lacus. Nunc sed turpis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh.',
        createdDate: '2020-10-01 12:34:51',
        updatedDate: '2020-10-01 15:43:15'
      },

      articleList: [
        {
          title: 'In enim justo rhoncus ut',
          shortDescription: 'Phasellus consectetuer vestibulum elit. Vivamus in erat ut urna cursus vestibulum. Vivamus in erat ut urna cursus vestibulum. Vivamus in erat ut urna cursus vestibulum.',
          image: 'https://s3.amazonaws.com/99Covers-Facebook-Covers/watermark/26193.jpg',
          createdDate: '2020-10-15 23:51:12',
          updatedDate: '2020-10-15 23:15:21'
        },
        {
          title: 'Nam at tortor in tellus',
          shortDescription: 'Phasellus consectetuer vestibulum elit. Vivamus in erat ut urna cursus vestibulum. Vivamus in erat ut urna cursus vestibulum. Vivamus in erat ut urna cursus vestibulum.',
          image: 'https://s3.amazonaws.com/99Covers-Facebook-Covers/watermark/26193.jpg',
          createdDate: '2020-10-15 23:51:12',
          updatedDate: '2020-10-15 23:15:21'
        },
      ]
    };
  }

  render() {
    return (
      <>
        <Helmet>
          <title>{this.state.title}</title>
          <meta name="description" content={this.state.shortDescription} />
        </Helmet>
        <div class='container-fluid h-100'>
          <div class='row mt-5 p-5 h-100 bg-white round'>
            <ParticlesBg color="#ffffff" num={20} type="square" bg={true} />
            <div class='col-md-8 h-100 overflow-auto'>
              <Scrollbars>
                <Article
                  article={this.state.mainArticle}
                />
              </Scrollbars>
            </div>
            <div class='col-md-4 h-100 overflow-auto'>
              <Scrollbars>
                <ArticleList articleList={this.state.articleList} />
              </Scrollbars>
            </div>
          </div>
          <div class='row'>
            <div class='col-md-12'>
              <Scrollbars>
                <ArticleList articleList={this.state.articleList} />
              </Scrollbars>
            </div>
          </div>
        </div>
      </>
    );
  }

}

export default Blog;