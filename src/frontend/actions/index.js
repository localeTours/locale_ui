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

export const selectTour = (tourAndTourId) => {
  return  {
    type: 'SELECT_TOUR',
    payload: tourAndTourId
  }
}

export const updateTour = (editedTour) => {
  return {
    type: 'UPDATE_TOUR',
    payload: editedTour
  }
}

export const selectCheckpoints = (checkpoints) => {
  return {
    type: 'SELECT_CHECKPOINTS',
    payload: checkpoints
  }
}

export const updateEditCheckpoint = (update) => {
  return {
    type: 'UPDATE_EDIT_CHECKPOINT',
    payload: update
  }
}

export const updateCheckpointsWithEdit = () => {
  return {
    type: 'UPDATE_CHECKPOINTS_WITH_EDIT'
  }
}

export const deleteCheckpoint = (id) => {
  return {
    type: 'DELETE_CHECKPOINT',
    payload: id
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
