import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';



export default function AdminAirlines() {

const [flightInfo, setCardInfo] = useState ([])

const deleteFlight = (flight) => {
axiosWithAuth()
.delete(`/flight/${flight.id}`, flight)
.then((res) => console.log(res))
.catch((err) => console.log(err));
};


useEffect(() => {
    axiosWithAuth()
    .get("https://kids-fly-be.herokuapp.com/api/flights")
    .then(res => {
        console.log(res.data)
        setCardInfo(res.data)
    })
    .catch(err => {
        console.error(err); 
    })
}, []) 

    return (
<fieldset >
  <h1>Current Trips</h1>
   {flightInfo.map(flights =>
   <div className="CurrentTrips" key= {flights.id}>

   
    
    <h2>Flight date: {flights.flight_date}</h2>
    <h3>Flight time: {flights.flight_time}</h3>
    <h4>Airport : {flights.airport}</h4>
    <h4>Airline Name: {flights.airline}</h4> 
    <h4>Flight number: {flights.flight_number}</h4>
    <button> <a href="/edit">Edit </a> </button>
    

    <button><a href="/delete"> Delete </a></button>

    <span
      className="delete"
      onClick={(e) => {
        e.stopPropagation();
        deleteFlight(flights.id);
      }}
    >
      
    </span>


    </div>

    )}

</fieldset>
    );
}