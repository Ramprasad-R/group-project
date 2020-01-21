import React from "react";
export default class RecipeCard extends React.Component {
  render() {
    const { receipeID, imageUrl, title } = this.props;
    return (
      <div id={receipeID}>
        <img src={imageUrl} alt={title}></img>
        <h4>{title}</h4>
      </div>
    );
  }
}
