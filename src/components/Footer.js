import React, { Component } from "react";
import "./style.css";
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
          Made with<span className="footerLogo"> ❤</span> at Codaisseur
        </p>
      </footer>
    );
  }
}
