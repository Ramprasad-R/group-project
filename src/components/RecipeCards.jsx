import React from "react";
import "./RecipeCards.css";
import { Link } from "react-router-dom";
export default class RecipeCard extends React.Component {
  render() {
    const { recipeID, imageUrl, title } = this.props;
    return (
      <div className="recipeCard" id={recipeID}>
        <Link to={`/productingredients/${recipeID}`}>
          {" "}
          <img src={imageUrl} alt={title}></img>
          <p>
            <em>{title}</em>
          </p>
        </Link>
        <img src={imageUrl} alt={title}></img>
        <p>
          <em>{title}</em>
        </p>
      </div>
    );
  }
}
