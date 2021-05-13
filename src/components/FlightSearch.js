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
    console.log('Fetch Flights: ');
    const flightsURL = 'https://intense-chamber-08012.herokuapp.com/flights';

    axios(flightsURL).then((results) => {
      console.log(results);

      let flights = [];
      // results.data.map( () => {
        // if (results.data.object.name === originquery ** results.data.object.name === destinationquery) {
        //   flights.push(results.data.object);
        // }
      // });

      this.setState({flights: flights});
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
