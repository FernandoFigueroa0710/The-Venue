import React, { Component } from "react";
import "./resources/styles.css";

import Header from "../src/components/header_footer/Header";

class App extends Component {
  render() {
    return (
      <div style={{ height: "1500px", background: "grey" }}>
        <Header />
      </div>
    );
  }
}

export default App;
