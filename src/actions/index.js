import axios from 'axios';

export const GET_TRIPS_START = 'GET_TRIPS_START';
export const GET_TRIPS_SUCCESS = 'GET_TRIPS_SUCCESS';
export const GET_TRIPS_FAIL = 'GET_TRIPS_FAIL';
export const ADD_TRIPS_START = 'ADD_TRIPS_START';
export const ADD_TRIPS_SUCCESS = 'ADD_TRIPS_SUCCESS';
export const ADD_TRIPS_FAIL = 'ADD_TRIPS_FAIL';

export const getTrips = () => dispatch => {
    dispatch({type: GET_TRIPS_START})
    axios
      .get('https://kids-fly-be.herokuapp.com/api/')
      .then(res => {
        dispatch({type: GET_TRIPS_SUCCESS, payload: res.data})
      })
      .catch(err => {
        dispatch({type: GET_TRIPS_FAIL, payload: err})
      })
  }
  
  export const addTrip = (newTrip) => dispatch => {
    dispatch({type: ADD_TRIPS_START})
    axios
      .post('https://kids-fly-be.herokuapp.com/api/', newTrip)
      .then(res => {
        dispatch({type: ADD_TRIPS_SUCCESS, payload: res.data})
      })
      .catch(err => {
        dispatch({type: ADD_TRIPS_FAIL, payload: err})
      })
  }