import React, { Component } from "react";
import { Tab } from "react-bootstrap";

export default class SearchRecipe extends Component {
  state = { name: "" };
  handleSubmit = event => {
    event.preventDefault();
    console.log(`Submitting form with query`, this.state.name);
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="search-recipe">
        <form onSubmit={this.handleSubmit}>
          <label>
            Search Recipe for:
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              //   value={this.state.query}
            />
          </label>
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
