import React, { Component } from 'react';
import axios from 'axios';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      origin: '',
      destination: ''
    };
    this._handleOriginInput = this._handleOriginInput.bind(this);
    this._handleDestinationInput = this._handleDestinationInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleOriginInput(event) {
    this.setState({origin: event.target.value});
  }
  _handleDestinationInput(event) {
    this.setState({destination: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.origin, this.state.destination); //run parent function
    this.setState({content: ''}); // clear the form once submitted
  }

  render() {
    return(
      <form onSubmit={ this._handleSubmit }>
        <input type='search' placeholder= 'origin' onInput = { this._handleOriginInput } required/>
        <input type='search' placeholder= 'destination' onInput = { this._handleDestinationInput } required/>
        <button>Search</button>
      </form>
    )
  }

}

export default SearchForm;
