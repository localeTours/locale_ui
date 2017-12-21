export const manageTour = (state = { currentTourId: "", currentTour: {} }, action) => {
  switch (action.type) {
    case 'SELECT_TOUR':
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}
