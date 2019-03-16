import React from "react";
import Button from "@material-ui/core/Button";
import ticket_icon from "../../resources/images/icons/ticket.png";
const MyButton = props => {
  return (
    <Button
      href="http://google.com"
      variant="contained"
      size="small"
      style={{
        background: "red",
        color: "white"
      }}
    >
      <img src={ticket_icon} className="iconImage" alt="icon_button" />
      Button
    </Button>
  );
};

export default MyButton;
