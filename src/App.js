import React, { Component } from "react";
import "./resources/styles.css";
import { Element } from "react-scroll";

//components
import Header from "../src/components/header_footer/Header";
import Featured from "../src/components/featured/Featured";
import VenueInfo from "./components/venueInfo/VenueInfo";
import Highlights from "./components/highlights/Highlights";
import Pricing from "./components/pricing/Pricing";
import Location from "./components/location/Location";
import Footer from "./components/header_footer/Footer";

class App extends Component {
  render() {
    return (
      <div style={{ height: "1500px", background: "grey" }}>
        <Header />

        <Element name="Featured">
          <Featured />
        </Element>

        <Element name="VenueInfo">
          <VenueInfo />
        </Element>

        <Element name="Highlights">
          <Highlights />
        </Element>

        <Element name="Pricing">
          <Pricing />
        </Element>

        <Element name="Location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
