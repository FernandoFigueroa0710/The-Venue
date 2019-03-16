import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import MyButton from "../UI/MyButton";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 50);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade left onReveal={() => this.percentage()}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
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
              <MyButton
                text="Purchase Tickets"
                bck="#ffa800"
                color="#ffffff"
                link="http://ticketmaster.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
