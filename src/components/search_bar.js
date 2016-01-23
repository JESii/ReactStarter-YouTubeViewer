import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' }
  }

  render() {
    return (
      <div className="search-bar">
        <span>Search:  <input
        onChange={ event => this.onInputChange(event.target.value) }
        value={this.state.term}
        /></span>
        <br />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

};

export default SearchBar;
