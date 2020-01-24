import React, { Component } from "react";
import "./style.css";
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
          Made with<span className="footerLogo"> ❤</span> at Codaisseur by Jend{" "}
          <a href="https://www.linkedin.com/in/jendhordejan/">
            <i class="fab fa-linkedin"></i>
          </a>{" "}
          and Ramprasad{" "}
          <a href="https://www.linkedin.com/in/ramprasad-rengaramanujam/">
            <i class="fab fa-linkedin"></i>
          </a>
        </p>
      </footer>
    );
  }
}
