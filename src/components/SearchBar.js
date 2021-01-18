import React from "react";

class SearchBar extends React.Component {
  state = {
    inputValue: "",
  };
  updateInputValue = (event) => {
    this.setState({ inputValue: event.target.value });
  };
  render() {
    return (
      <div className="search-bar">
        <input
          onChange={this.updateInputValue}
          value={this.state.inputValue}
          placeholder="Enter a username..."
          className="input-username"
          type="text"
        />
        <button
          onClick={() => this.props.onSearch(this.state.inputValue)}
          className="btn-search"
        >
          SEARCH
        </button>
      </div>
    );
  }
}

export default SearchBar;
