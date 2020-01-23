import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FetchData from "./components/FetchData";
import { Route } from "react-router-dom";
import ProductIngredients from "./components/ProductIngredients";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={FetchData} />
        <Route
          exact
          path="/productingredients/:productId"
          component={ProductIngredients}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
