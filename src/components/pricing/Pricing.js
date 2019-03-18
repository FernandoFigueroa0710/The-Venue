import React, { Component } from "react";
import MyButon from "../UI/MyButton";
import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
  state = {
    prices: [100, 150, 200],
    position: ["Balcony", "Front", "VIP"],
    desc: [
      "Lorem ipsum dolor sit amet, te mea movet dicit signiferumque, mea veri elitr eleifend ea. No vis debet ancillae albucius",
      "Mea ut modo ocurreret, in cum quodsi praesent, sit in quot commodo accusam.",
      "No nulla ponderum definitionem pro, sea at tincidunt appellantur, impetus corrumpit assueverit id eos."
    ],
    linkto: [
      "https://www.viagogo.com/ww/Concert-Tickets/Rock-and-Pop/Ariana-Grande-Tickets?AffiliateID=49&adposition=1t1&PCID=PSROWGOOCONARIAN70D59F57A&AdID=324036301880&MetroRegionID=&psc=&psc=&ps=&ps=&ps_p=0&ps_c=1592575147&ps_ag=60472507139&ps_tg=kwd-296667379833&ps_ad=324036301880&ps_adp=1t1&ps_fi=&ps_fi=&ps_li=&ps_li=&ps_lp=1010149&ps_n=g&ps_d=c&gclid=CjwKCAjwvbLkBRBbEiwAChbcka3rVV77IY6rj0HD3BBVoRh0F-gXBqLq0CshkouK-wfBnIKeWMg6RRoCko4QAvD_BwE",
      "https://www.ticketmaster.com/ariana-grande-tickets/artist/1688071",
      "https://www.theqarena.com/events/detail/ariana-grande-190328"
    ],
    delay: [500, 0, 500]
  };

  displayPricing = () =>
    this.state.prices.map((price, i) => (
      <Zoom top delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.position[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc}</div>
            <div className="pricing_buttons">
              <MyButon
                link={this.state.linkto[i]}
                bck="#ffa800"
                color="#ffffff"
                text="purchase"
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Ticket Prices</h2>
          <div className="pricing_wrapper">{this.displayPricing()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
