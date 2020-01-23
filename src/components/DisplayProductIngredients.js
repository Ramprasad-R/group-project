import React from "react";

function DisplayProductIngredients(props) {
  const { title, nutrition } = props;
  return (
    <div className="productIngredientsContainer">
      <h1>{title}</h1>
      {/* {images && images.map(url => <img src={url} alt="Dog" />)} */}

      <div className="nutritionInfo">
        {nutrition.nutrients &&
          nutrition.nutrients.map(nutrient => (
            <div className="nutrientsItem">
              <p>nutrient.title</p> <p>nutrient.amount</p>
              <p>nutrients.unit</p>
              <p>nutrients.percentOfDailyNeeds</p>
            </div>
          ))}{" "}
      </div>
    </div>
  );
}

export default DisplayProductIngredients;
