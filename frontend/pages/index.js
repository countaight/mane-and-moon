import React, { Component } from "react";

import Intro from "../components/Intro";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

class Home extends Component {
  render() {
    return (
      <>
        <Intro />
        <Services />
        <Portfolio />
        <Contact />
      </>
    );
  }
}

export default Home;
