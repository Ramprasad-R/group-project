import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FetchData from "./components/FetchData";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FetchData />
        <Footer />;
      </div>
    );
  }
}

export default App;
