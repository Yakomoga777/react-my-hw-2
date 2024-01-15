import React, { Component } from "react";
import { MessageStyled } from "./Notification.stiled";

class Notification extends Component {
  render() {
    const { message } = this.props;

    return <MessageStyled>{message}</MessageStyled>;
  }
}

export default Notification;
