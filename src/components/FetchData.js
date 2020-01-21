import React, { Component } from "react";
import RecipeCards from "./RecipeCards";
export default class FetchData extends Component {
  state = {
    loading: true,
    foodData: [],
    error: false
  };
  componentDidMount = async () => {
    try {
      const foodItems = await fetch(
        `https://api.spoonacular.com/food/products/search?query=pizza&apiKey=${process.env.REACT_APP_API_KEY}`
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
  render() {
    console.log("I am in render", this.state.foodData);
    const displayData = this.state.foodData.map(item => {
      return (
        <RecipeCards
          imageUrl={item.image}
          title={item.title}
          receipeID={item.id}
        />
      );
    });

    return this.state.loading ? (
      <div> Data Loading ... </div>
    ) : (
      <div>{displayData}</div>
    );
  }
}
