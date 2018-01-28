import {checkDb} from '../services/db';

export const addCheckpoint = (checkpoint) => {
  return {
    type: 'ADD_CHECKPOINT',
    payload: checkpoint
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

export const updateCreateCheckpoints = (checkpoint) => {
  return {
    type: 'UPDATE_CREATE_CHECKPOINT',
    payload: checkpoint
  }
}

export const addCreateCheckpoint = (checkpoint) => {
  return {
    type: "ADD_CREATE_CHECKPOINT",
    payload: checkpoint
  }
}
