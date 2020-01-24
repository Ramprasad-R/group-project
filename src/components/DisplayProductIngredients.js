import React from "react";
import { Link } from "react-router-dom";
import "./ProductIngredients.css";
function DisplayProductIngredients(props) {
  const { productInfo, nutrition } = props;
  return (
    <div className="productIngredients">
      <div className="productInfoTitle">
        <img src={productInfo.images[0]} alt="" />
        <h4>{productInfo.title}</h4>
      </div>
      <div className="productIngredientsContainer">
        <div>
          <div>
            <h6>Product Nutrients Value</h6>
          </div>
        </div>
        <div className="nutritionInfo">
          {nutrition.nutrients &&
            nutrition.nutrients.map(nutrient => (
              <div className="nutrientsItem">
                <p>
                  Title: <em>{nutrient.title}</em>
                </p>{" "}
                <p>
                  Amount: <em>{nutrient.amount}</em>
                </p>
                <p>
                  Unit: <em>{nutrient.unit}</em>
                </p>
                <p>
                  Percent of daily needs:{" "}
                  <em>{nutrient.percentOfDailyNeeds}</em>
                </p>
              </div>
            ))}{" "}
        </div>
      </div>
      <Link to="/">Go back to the index</Link>
    </div>
  );
}

export default DisplayProductIngredients;
