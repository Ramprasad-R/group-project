import React, { Component } from "react";

import DisplayProductIngredients from "./DisplayProductIngredients";
import "./ProductIngredients.css";

export default class ProductIngredients extends Component {
  state = {
    loading: true,
    productInfo: []
  };
  invokeAPIToFetchData = async () => {
    try {
      const productId = this.props.match.params.productId;
      const productInfo = await fetch(
        `https://api.spoonacular.com/food/products/${productId}?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const parsedproductInfo = await productInfo.json();
      this.setState({
        loading: false,
        productInfo: parsedproductInfo
      });
    } catch (error) {
      this.setState({
        error: error
      });
    }
  };

  componentDidMount = async () => this.invokeAPIToFetchData();

  render() {
    return this.state.loading ? (
      <div> Data Loading ... </div>
    ) : (
      <DisplayProductIngredients
        productInfo={this.state.productInfo}
        nutrition={this.state.productInfo.nutrition}
      />
    );
  }
}
