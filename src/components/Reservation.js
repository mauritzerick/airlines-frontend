import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Reservation extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <h1>Seating Chart Displays Here</h1>
    );
  }
}

export default Reservation;
