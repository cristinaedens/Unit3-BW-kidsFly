import React from "react";
import {Link} from 'react-router-dom';


import AdminAirlines from '../actions/AdminAirlines'
    
    const Protected = () => {

    
      return (
        <div className="Protected">
          <div className="Dashboard">
        <h1>Dashboard</h1>
        <h3 className="manual"><a className="manual" href ="/add">Add a manual Trip </a> </h3>
        </div>
        <Link to ="/adminairlines" component={AdminAirlines}>All Trips</Link> 
        </div>
      );
    };

export default Protected