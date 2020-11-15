import React from 'react';
import { Helmet } from "react-helmet";
import Typing from 'react-typing-animation';
import ParticlesBg from 'particles-bg';
import './style.css';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isTypingFinished: false
    };
    this.typingFinished = this.typingFinished.bind(this);
  }

  typingFinished() {
    this.setState({ isTypingFinished: true });
  }

  render() {
    let backgroundAnimation = <></>;
    if (this.state.isTypingFinished) {
      backgroundAnimation = <ParticlesBg color="#ffffff" num={20} type="custom" bg={true} />
    }
    return (
      <>
        <Helmet>
          <title>{this.state.title}</title>
          <meta name="description" content={this.state.shortDescription} />
        </Helmet>
        <div class='row p-3 h-100 align-items-center'>
          {backgroundAnimation}
          <div class='col-md-12'>
            <div class='greeting text-center h-100'>
              <h1>Hi<br />
              <small>My name is Niroshan Jayathilaka</small></h1>
              <Typing onFinishedTyping={this.typingFinished}>
                <p class='h4'>
                  <small>Welcome to my site!</small>
                </p>
              </Typing>
            </div>
          </div>
        </div>
      </>
    );
  }

}

export default Home;