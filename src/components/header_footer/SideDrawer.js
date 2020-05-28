import React from "react";
import { animateScroll as scroll, scroller } from "react-scroll";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

const SideDrawer = (props) => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -125,
    });

    props.onClose(false);
  };
  const scrollToTopElement = (element) => {
    scroll.scrollToTop(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 0,
    });
  };
  const scrollToBottomElement = (element) => {
    scroll.scrollToBottom(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 0,
    });
  };
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}>
      <List component="nav">
        <ListItem button onClick={() => scrollToTopElement("Featured")}>
          Event Starts In
        </ListItem>
        <Divider />
        <ListItem button onClick={() => scrollToElement("VenueInfo")}>
          Venue Info
        </ListItem>
        <Divider />
        <ListItem button onClick={() => scrollToElement("Highlights")}>
          Highlights
        </ListItem>
        <Divider />
        <ListItem button onClick={() => scrollToElement("Pricing")}>
          Pricing
        </ListItem>
        <Divider />
        <ListItem button onClick={() => scrollToBottomElement("Location")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
