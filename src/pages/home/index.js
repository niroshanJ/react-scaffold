import React from 'react';
import { Helmet } from "react-helmet";
import Typing from 'react-typing-animation';
import ParticlesBg from 'particles-bg';
import './style.css';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <Helmet>
          <html className="h-100" />
          <body className="h-100" />
        </Helmet>
        <div class='row p-3 h-100 align-items-center'>

          <ParticlesBg color="#ff0000" num={5} type="circle" bg={true} />
          <div class='col-md-12'>
            <div class='greeting text-center h-100'>
              <Typing>
                <p class='h1'>Hello!</p>
                <h1>My name is Niroshan Jayathilaka</h1>
                <h2 class='h3'>Welcome to my personal website!</h2>
              </Typing>
            </div>
          </div>
        </div>
      </>
    );
  }

}

export default Home;