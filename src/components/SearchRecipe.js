import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tab } from "react-bootstrap";

export default class SearchRecipe extends Component {
  propTypes = {
    changeQuery: PropTypes.func
  };

  state = { query: "" };

  handleSubmit = event => {
    event.preventDefault();
    this.props.changeQuery(this.state.query);
    console.log(`Submitting form with query`, this.state.query);
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
              name="query"
              onChange={this.handleChange}
              value={this.state.query}
            />
          </label>
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
