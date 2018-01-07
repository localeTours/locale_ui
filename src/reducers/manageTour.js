export const manageTour = (state = { currentTourId: "", currentTour: {} }, action) => {
  switch (action.type) {
    case 'SELECT_TOUR':
      return Object.assign({}, state, action.payload)
    case 'UPDATE_TOUR':
      var updatedTour = Object.assign({}, state.currentTour, {name: action.payload.editTitle, description: action.payload.editDescription})
      return Object.assign({}, state, {currentTour: updatedTour})
    default:
      return state;
  }
}
