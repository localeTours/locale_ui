export const manageMap = (state = { latLng: { lat: null, lng: null }}, action) => {
  switch (action.type) {
    case 'ADD_LATLNG':
      return Object.assign({}, state, { latLng: action.payload });
    default:
      return state;
  }
}
