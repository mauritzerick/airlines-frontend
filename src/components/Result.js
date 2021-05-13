import React, { Component } from 'react';
import axios from 'axios';

class Result extends Component {
  constructor() {
    super();
    this.state = {flight_id: ""};
    this._update = this._update.bind(this);
    this.flights = this.flights.bind(this);
  }
  _update(flight_id)
  {
      this.setState({flight_id});
  }

  _handleClick = (flight_id) => {
    this.props.passFlightId( flight_id );
  }

  render() {
    return(
      <h1>Flight Results</h1>
      {this.props.flights.map (s=>
        <p key={s.id}>{s.origin} to {s.destination} on {s.date}: Flight&nbsp;{s.number}
        <button onClick = { () => { this._handleClick(s.id) } }>
          Book Flight
        </button></p>
      )}
    </div>
    );
  }
  }


export default Result;
