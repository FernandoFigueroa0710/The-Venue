import React, { Component } from "react";
import "./resources/styles.css";

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
        <Featured />
        <VenueInfo />
        <Highlights />
        <Pricing />
        <Location />
        <Footer />
      </div>
    );
  }
}

export default App;
