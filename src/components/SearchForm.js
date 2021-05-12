import React, { Component } from 'react';
import axios from 'axios';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event) {
    this.setState({query: event.target.value});
  }

  _handleSubmit(event) {
    this.props.onSubmit(this.state.query); //run parent function
  }

  render() {
    return(
      <form onSubmit={ this._handleSubmit }>
        <input type='search' placeholder= 'origin'/>
        <input type='search' placeholder= 'destination'/>
        <button>Search</button>
      </form>
    )
  }

}

export default SearchForm
