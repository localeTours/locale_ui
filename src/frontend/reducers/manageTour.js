export const manageTour = (state = { currentTourId: "", currentTour: {}, createTour: {isPrivate: false, inOrder: false} }, action) => {
  switch (action.type) {
    case 'SELECT_TOUR':
      return Object.assign({}, state, action.payload)
    case 'UPDATE_TOUR':
      var updatedTour = Object.assign({}, state.currentTour, {name: action.payload.editTitle, description: action.payload.editDescription})
      return Object.assign({}, state, {currentTour: updatedTour})
    case 'UPDATE_CREATE_TOUR':
      var updatedField = Object.assign({}, state.createTour, action.payload)
      return Object.assign({}, state, { createTour: updatedField })
    default:
      return state;
  }
}
