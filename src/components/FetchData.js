import React, { Component } from "react";
import RecipeCards from "./RecipeCards";
import "./FetchData.css";
import SearchRecipe from "./SearchRecipe";
export default class FetchData extends Component {
  state = {
    loading: true,
    foodData: [],
    error: false,
    query: "olives"
  };

  invokeAPIToFetchData = async () => {
    try {
      const foodItems = await fetch(
        `https://api.spoonacular.com/food/products/search?query=${this.state.query}&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const parsedFoodItems = await foodItems.json();
      console.log("In componentDidMount", foodItems);

      this.setState({
        loading: false,
        foodData: parsedFoodItems.products
      });
    } catch (error) {
      console.log("In Catch ", error);
      this.setState({
        error: error
      });
    }
  };

  componentDidMount = async () => this.invokeAPIToFetchData();

  changeQuery = () => {
    this.setState({ query: "cheese" }, () => {
      this.invokeAPIToFetchData();
    });
  };
  render() {
    console.log("I am in render", this.state.foodData);
    const displayData = this.state.foodData.map(item => {
      return (
        <RecipeCards
          imageUrl={item.image}
          title={item.title}
          recipeID={item.id}
        />
      );
    });

    return this.state.loading ? (
      <div> Data Loading ... </div>
    ) : (
      <div>
        <SearchRecipe />
        <div className="displayRecipeCard">{displayData}</div>
      </div>
    );
  }
}
