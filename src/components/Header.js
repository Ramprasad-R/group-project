import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import logo from "./spoonoh_logo.png";
import "./Header.css";
export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
            />{" "}
            <span className="center-navbar">Spoon Oh!</span>
          </Navbar.Brand>
        </Navbar>
      </>
    );
  }
}
