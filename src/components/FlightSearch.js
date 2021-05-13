import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Result from './Result';

import axios from 'axios'; //same as $.getJSON - ajax library
import _ from 'underscore';

class FlightSearch extends Component {
  constructor() {
    super();
    this.state = {flights: [] };
    // this.fetchFlights = this.fetchFlights.bind(this);
  }

  fetchFlights(query) { //query entered into input

    const flightsURL =

    axios(flightrURL).then((results)=>{
      const flights = _(results.data);
    });

  }

  render() {//parent's state is becoming a prop for the child
    return (
      <div>
        <SearchForm />
        <Result />
      </div>
    )
  }
}

export default FlightSearch;
