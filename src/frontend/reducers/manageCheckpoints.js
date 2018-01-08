export const manageCheckpoints = (state = {checkpoints: [], editCheckpoints: []}, action) => {
  switch (action.type) {
    case 'SELECT_CHECKPOINTS':
      return {checkpoints: action.payload, editCheckpoints: action.payload}
    case 'UPDATE_EDIT_CHECKPOINT':
      var updatedEdit = state.editCheckpoints.map((checkpoint) => {
        if(checkpoint.id === action.payload.id) {
          var updatedCheckpoint = Object.assign({}, checkpoint, {})
          updatedCheckpoint[action.payload.property] = action.payload.value
          return updatedCheckpoint
        }
        return checkpoint
      })
      return Object.assign({}, state, {editCheckpoints: updatedEdit})
    case 'UPDATE_CHECKPOINTS_WITH_EDIT':
      return Object.assign({}, state, { checkpoints: state.editCheckpoints })
    case 'DELETE_CHECKPOINT':
      var deletedArray = state.editCheckpoints.filter((checkpoint) => {
        if(checkpoint.id !== action.payload){
          return checkpoint
        }
      })
      return {checkpoints: deletedArray, editCheckpoints: deletedArray}
    default:
      return state;
  }
}
