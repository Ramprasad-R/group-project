import React, { Component } from "react";
import logo from "./spoonoh_logo.png";
import "./style.css";
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </header>
    );
  }
}
