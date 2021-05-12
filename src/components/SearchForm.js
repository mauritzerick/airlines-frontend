import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

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
    this.setState({content: ''}); // clear the form once submitted
  }

  render() {
    return(
      <form onSubmit={ this._handleSubmit }>
        <input type='search' placeholder= 'origin' onInput = { this._handleInput } required/>
        <input type='search' placeholder= 'destination' onInput = { this._handleInput } required/>
        <button>Search</button>
      </form>
    )
  }

}

export default SearchForm;
