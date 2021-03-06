import React, { Component } from "react";
import { Context } from "./context";
const io = require("socket.io-client");
var patch = require("socketio-wildcard")(io.Manager);

export default class Provider extends Component {
  constructor(props) {
    super(props);
    this.socket = io(props.url);
    patch(this.socket);
  }

  render() {
    return (
      <Context.Provider value={this.socket}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
