import React from "react";
import { Link } from "react-router-dom";
import DisplayProductIngredients from "./DisplayProductIngredients";

export default function ProductIngredients(props) {
  const productId = props.match.params.productId;
  console.log("Product Nutrients Value", productId);
  const testData = {
    nutrients: [
      {
        title: "Test1",
        unit: "cal",
        amount: 123,
        percentOfDailyNeeds: "dummy"
      },
      { title: "Test2", unit: "cal", amount: 123, percentOfDailyNeeds: "dummy" }
    ]
  };
  return (
    <div className="productIngredients">
      <h1>Product Nutrients Value</h1>
      <DisplayProductIngredients title="Some dummy" nutrition={testData} />
      <Link to="/">Go back to the index</Link>
    </div>
  );
}
