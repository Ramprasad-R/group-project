import React from "react";
import { Link } from "react-router-dom";
import DisplayProductIngredients from "./DisplayProductIngredients";

export default function ProductIngredients(props) {
  const productId = props.match.params.productId;
  console.log("Product Nutrients Value", productId);
  //fetch data here:

  const invokeAPIToFetchData = async () => {
    try {
      const productInfo = await fetch(
        `https://api.spoonacular.com/food/products/${productId}?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const parsedproductInfo = await productInfo.json();
      console.log("parsedproductInfo: ", parsedproductInfo);
      return parsedproductInfo;
    } catch (error) {
      this.setState({
        error: error
      });
    }
  };

  const detailedProductInfo = invokeAPIToFetchData();
  // const testData = {
  //   nutrients: [
  //     {
  //       title: "Test1",
  //       unit: "cal",
  //       amount: 123,
  //       percentOfDailyNeeds: "dummy"
  //     },
  //     { title: "Test2", unit: "cal", amount: 123, percentOfDailyNeeds: "dummy" }
  //   ]
  // };
  return (
    <div className="productIngredients">
      <h1>Product Nutrients Value</h1>
      <DisplayProductIngredients
        title={detailedProductInfo.title}
        nutrition={detailedProductInfo}
      />
      <Link to="/">Go back to the index</Link>
    </div>
  );
}
