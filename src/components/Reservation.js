import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
// import SeatMap from './SeatMap';

class SubmitComplex extends Component {
  render() {
    return (
      <div>
        <button className="res-button" onClick={ this.props.onClick }>Book</button>
      </div>
    );
  }
}

const fetchFlight = (id) => {
  axios.get(`http://intense-chamber-08012.herokuapp.com/flights/${ id }.json`)
    .then( results => {
       this.setState({ flight: results.data })
      })
    .then( () => {
      const reservations = this.state.flight.reservations.slice();
      const takenSeats = reservations.map(r => r.seat);
      this.setState({ takenSeats });
    });
  setTimeout( () => { fetchFlight( this.state.flight_id ) }, 1000 );
}

const fetchUser = () => {
  axios.get(`http://intense-chamber-08012.herokuapp.com/users/${ props.user_id }.json`)
    .then( results => this.setState({ user: results.data }) );
  setTimeout( fetchUser, 1000 );
}
fetchFlight( this.state.flight_id );
fetchUser();



class Reservation extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <h1>Make a reservation</h1>
        <h1>Seating Chart</h1>

        {/* <SeatMap rows={ this.state.flight.rows } cols={ this.state.flight.cols } takenSeats={ this.state.takenSeats } passSeat={ this.saveSelected } /> */}
        <SubmitComplex onClick={ this.addNewRes } />

      </div>
    );
  }
}

export default Reservation;
