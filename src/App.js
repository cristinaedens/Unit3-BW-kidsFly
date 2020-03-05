import React from 'react';
import { Route, Switch, Link } from "react-router-dom";

import './App.css';
import ParentLogin from './components/ParentLogin';
import ParentRegistration from './components/ParentRegistration';
import PrivateRoute from './components/PrivateRoute';
import Card from './components/Card'
import Protected from './components/Protected'
import AddFlight from './actions/addFlight';
import EditFlight from "./actions/editFlight";
import DeleteFlight from "./actions/deleteFlight";



function App() {
  return (
    <div className="App">
      <div className="nav">
      <h1 className="logo"> KidsFly! </h1>
      <Route>
        <Link to="/register">Register</Link><br></br>
      </Route>
      <Route>
        <Link to="/login">Login</Link><br></br>
      </Route>
      <Route>
        <Link to="/admin">Admin Dashboard</Link>
      </Route>
      </div>
      <Switch>
        <Route exact path="/login" component={ParentLogin} />
        <Route exact path="/register" component={ParentRegistration} />
        <PrivateRoute exact path="/admin" component={Protected} />
        <PrivateRoute exact path="/card" component={Card} />
        <PrivateRoute exact path="/add" component={AddFlight} />
        <PrivateRoute exact path="/edit" component={EditFlight} />
        <PrivateRoute exact path="/delete" component={DeleteFlight} />
      </Switch>
    </div>
  );
}

export default App;
