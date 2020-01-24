import React, { Component } from "react";
import { Link } from "react-router-dom";
import DisplayProductIngredients from "./DisplayProductIngredients";

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
      <div className="productIngredients">
        <h1>Product Nutrients Value</h1>
        <DisplayProductIngredients
          title={this.state.productInfo.title}
          nutrition={this.state.productInfo.nutrition}
        />
        <Link to="/">Go back to the index</Link>
      </div>
    );
  }
}
