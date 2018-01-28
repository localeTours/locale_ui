var emptyCheckpoint = {
  latitude: 0,
  longitude: 0,
  name: "",
  position: -1
}

var createCheckpoints = []
for(var i = 1; i <= 10; i++) {
  createCheckpoints.push(emptyCheckpoint)
}

export const manageCheckpoints = (state = {checkpoints: [], editCheckpoints: [], createCheckpoints: createCheckpoints}, action) => {
  switch (action.type) {
    case 'SELECT_CHECKPOINTS':
      return {checkpoints: action.payload, editCheckpoints: action.payload}
    case 'SELECT_CHECKPOINT':
      return { checkpoints: [action.payload, ...state.checkpoints], editCheckpoints: [action.payload, ...state.editCheckpoints] }
    case 'ADD_CHECKPOINT':
      var updatedChkpntArr = [...state.checkpoints, action.payload]
      return { checkpoints: updatedChkpntArr, editCheckpoints: updatedChkpntArr}
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
    case 'CREATE_CHECKPOINT':
      var updatedCreateChkpnts = [...state.createCheckpoints, action.payload]
      return Object.assign({}, state, { createCheckpoints: updatedCreateChkpnts })
    case 'ADD_CREATE_CHECKPOINT':
      return Object.assign({}, state, { createCheckpoints: [...state.createCheckpoints, emptyCheckpoint] })
    case 'UPDATE_CREATE_CHECKPOINT':

    default:
      return state;
  }
}
