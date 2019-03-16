import React, { Component } from "react";
import "./resources/styles.css";

import Header from "../src/components/header_footer/Header";
import Featured from "../src/components/featured/Featured";

class App extends Component {
  render() {
    return (
      <div style={{ height: "3500px", background: "grey" }}>
        <Header />
        <Featured />
      </div>
    );
  }
}

export default App;
