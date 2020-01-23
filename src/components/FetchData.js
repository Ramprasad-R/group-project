import React, { Component } from "react";
import RecipeCards from "./RecipeCards";
import "./FetchData.css";
import SearchRecipe from "./SearchRecipe";
export default class FetchData extends Component {
  state = {
    loading: true,
    foodData: [],
    error: false,
    query: "pasta recipe"
  };

  invokeAPIToFetchData = async () => {
    try {
      const foodItems = await fetch(
        `https://api.spoonacular.com/food/products/search?query=${this.state.query}&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      console.log(
        "get Food",
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

  changeQuery = searchQuery => {
    this.setState({ query: searchQuery }, () => {
      this.invokeAPIToFetchData();
    });
    console.log("searchQuery value:", this.state.query);
  };
  // sayHello = antyhing => {
  //   console.log("hello", `SAY HELLO TO ....${antyhing}`);
  // };

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
        {/* <SearchRecipe changeQuery={this.sayHello} /> */}
        <SearchRecipe changeQuery={this.changeQuery} />
        <div className="displayRecipeCard">{displayData}</div>
      </div>
    );
  }
}
