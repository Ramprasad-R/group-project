import React from "react";
import "./RecipeCards.css";
export default class RecipeCard extends React.Component {
  render() {
    const { recipeID, imageUrl, title } = this.props;
    return (
      <div className="recipeCard" id={recipeID}>
        <img src={imageUrl} alt={title}></img>
        <p>
          <em>{title}</em>
        </p>
      </div>
    );
  }
}
