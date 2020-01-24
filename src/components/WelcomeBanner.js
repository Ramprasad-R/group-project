import React, { Component } from "react";
import "./WelcomeBanner.css";

export default class WelcomeBanner extends Component {
  render() {
    return (
      <div className="welcome-banner-container">
        <h1>Welcome to Spoon-Oh!</h1>
        <p>
          Your one-stop place for searching products to find the best one that
          meets your nutritional needs
        </p>
      </div>
    );
  }
}
