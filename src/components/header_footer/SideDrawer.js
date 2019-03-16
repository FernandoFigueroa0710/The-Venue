import React from "react";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

const SideDrawer = props => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log("Event Starts In")}>
          Event Starts In
        </ListItem>
        <Divider />
        <ListItem button onClick={() => console.log("Venue Info")}>
          Venue Info
        </ListItem>
        <Divider />
        <ListItem button onClick={() => console.log("Highlights")}>
          Highlights
        </ListItem>
        <Divider />
        <ListItem button onClick={() => console.log("Pricing")}>
          Pricing
        </ListItem>
        <Divider />
        <ListItem button onClick={() => console.log("Location")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
