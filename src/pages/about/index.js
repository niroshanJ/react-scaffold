import React from 'react';
import { Helmet } from "react-helmet";
import './style.css';

function About(props) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
        <meta name="description" content="This is about!" />
      </Helmet>
      <h1>About</h1>
    </>

  );
}

export default About;