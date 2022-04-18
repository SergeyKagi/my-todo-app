import React, { Component } from 'react';
import './SearchTodoItems.css';

export default class SearchTodoItems extends Component {
  state = {
    term: '',
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };
  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="search text"
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}
