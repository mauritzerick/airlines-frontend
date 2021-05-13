import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Result from './Result';

import axios from 'axios'; //same as $.getJSON - ajax library
import _ from 'underscore';

class FlightSearch extends Component {
  constructor() {
    super();
    this.state = {flights: [] };
    this.fetchFlights = this.fetchFlights.bind(this);
  }

  fetchFlights(originquery, destinationquery) { //query entered into input
    const flightsURL = 'https://intense-chamber-08012.herokuapp.com/flights.json';

    axios(flightsURL).then((results) => {

      let flights = [];
      for(let i=0; i < results.data.length; i++ ){
        if (results.data[i].origin === originquery && results.data[i].destination === destinationquery) {
          flights.push(results.data[i]);

        }
      };

      this.setState({flights: flights});
      console.log(this.state.flights);
    });

  }

  render() {//parent's state is becoming a prop for the child
    return (
      <div>
        <SearchForm onSubmit={ this.fetchFlights } />
        <Result flights = {this.state.flights}/>
      </div>
    )
  }
}

export default FlightSearch;
