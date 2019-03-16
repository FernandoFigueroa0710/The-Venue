import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

class Discount extends Component {
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade left>
            <div className="discount_percentage">
              <span>23%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before July 10th</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Magna sit amet purus gravida quis blandit. Dui vivamus arcu
                felis bibendum ut tristique et egestas. Consequat id porta nibh
                venenatis cras sed felis eget. Faucibus in ornare quam viverra.
              </p>
              <div>Button</div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
