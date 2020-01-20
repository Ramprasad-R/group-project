import React, { Component } from "react";
import logo from "./spoonoh_logo.png";
import "./style.css";
export default class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt="logo" />
      </header>
    );
  }
}
