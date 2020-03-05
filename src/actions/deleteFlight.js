import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

export default function DeleteFlight() {

const [cardInfo, setCardInfo ] = useState ()

useEffect(() => {
    axiosWithAuth
    .delete(`https://kids-fly-be.herokuapp.com/api/flights/`, this.state.flight)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.error(err); 
    })
}) 

    return (
<div className="DeletedTrips">
    <h1>
       <p >
Are you sure you want to delete? Action can't be undone
<button>Confirm</button>
<button>Cancel</button>

       </p>
    </h1>
</div>
    );
}