import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function ProductIngredients(props) {
  const productId = props.match.params.productId;
  console.log("Product Ingredients", productId);
  return (
    <div className="productIngredients">
      <h1>Product Ingredients</h1>
      This page will Product Ingredients.
      <Link to="/">Go back to the index</Link>
    </div>
  );
}
