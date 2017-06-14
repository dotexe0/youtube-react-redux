import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.query}
          onChange={e => this.setState({ query: e.target.value })}
        />
        Value of Input: {this.state.query}
      </div>
    );
  }

  // _onInputChange = (e) => {

  //     console.log(e.target.value);

  // }
}
