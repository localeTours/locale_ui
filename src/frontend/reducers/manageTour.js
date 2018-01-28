var createTour = {
  tourName: "",
  tourDescription: "",
  startDate: Date.now(),
  endDate: Date.now(),
  isPrivate: false,
  inOrder: false
}
export const manageTour = (state = { currentTourId: "", currentTour: {}, createTour: createTour }, action) => {
  switch (action.type) {
    case 'SELECT_TOUR':
      return Object.assign({}, state, {currentTour: action.payload.currentTour, currentTourId: action.payload.currentTourId})
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
