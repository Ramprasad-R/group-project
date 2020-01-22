import React, { Component } from 'react'

export default class SearchRecipe extends Component {
    render() {
        return (
            <div className="search-recipe">
                <form>
                    <label>
                        Search Recipe for:
                <input type="text" name="txtSearch" />
                    </label>
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}
