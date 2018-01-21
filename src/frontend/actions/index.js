import {tourDb, checkDb} from '../services/db';

export * from './accountActions';
export * from './checkpointActions';
export * from './tourActions';

export const setLatLng = () => {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition((resp) => {
      let latLng = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      }
      dispatch({
        type: 'ADD_LATLNG',
        payload: latLng
      })
    })
  }
}

export const addTour = (tour) => {
  return {

  }
}
