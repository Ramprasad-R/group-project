import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SearchRecipe extends Component {
  propTypes = {
    changeQuery: PropTypes.func
  };

  state = { query: "" };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query) {
      this.props.changeQuery(this.state.query);
    } else {
      return;
    }
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
          <input
            type="text"
            name="query"
            onChange={this.handleChange}
            value={this.state.query}
            placeholder="Search food product to get nutrients value"
          />

          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
