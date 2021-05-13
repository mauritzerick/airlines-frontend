import React, { Component } from 'react';
import axios from 'axios';

const Result = (props) => { //props coming from parent
  console.log(props);
  return (
    <div>
      <ul>
        {props.flights.map((item, i) => <li key={i}>{`Origin: ${item.origin} - Destination: ${item.destination} - Flight Number: ${item.number} - Date: ${item.date}`} </li>)}
      </ul>
    </div>
  )
};

export default Result;
