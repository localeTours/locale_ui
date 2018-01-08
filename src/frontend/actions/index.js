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

export const signIn = (payload) => {
  return {
      type: 'SIGN_IN',
      payload: payload
  }
}


export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}
