import React from "react";
import "./RecipeCards.css";
import { Link } from "react-router-dom";
export default class RecipeCard extends React.Component {
  state = {
    likeCounter: 0
  };
  increaseLikes = () => {
    this.setState({ likeCounter: this.state.likeCounter + 1 });
  };
  render() {
    const { recipeID, imageUrl, title } = this.props;
    return (
      <div className="recipeCard" id={recipeID}>
        <Link to={`/productingredients/${recipeID}`}>
          <img src={imageUrl} alt={title}></img>
          <p>
            <em>{title}</em>
          </p>
        </Link>
        <div>
          <text>{this.state.likeCounter}</text>
          <div>
            <i
              class="fas fa-thumbs-up"
              id={recipeID}
              onClick={this.increaseLikes}
            ></i>
          </div>
        </div>
      </div>
    );
  }
}
