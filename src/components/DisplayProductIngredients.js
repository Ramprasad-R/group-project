import React from "react";

function DisplayProductIngredients(props) {
  const { nutrition } = props;
  console.log("info props", props);

  return (
    <div className="productIngredientsContainer">
      <div>
        <div>
          <h6>Product Nutrients Value</h6>
        </div>
      </div>
      {/* {images && images.map(url => <img src={url} alt="Dog" />)} */}

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
                Percent of daily needs: <em>{nutrient.percentOfDailyNeeds}</em>
              </p>
            </div>
          ))}{" "}
      </div>
    </div>
  );
}

export default DisplayProductIngredients;
