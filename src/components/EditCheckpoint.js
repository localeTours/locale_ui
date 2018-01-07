import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { tourDb, checkDb } from "../services/db";
import { selectTour } from "../actions";
import { updateTour } from '../actions';
import { updateEditCheckpoint } from '../actions';
import { deleteCheckpoint } from '../actions';

class CheckpointEdit extends React.Component{
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.deleteCheckpoint = this.deleteCheckpoint.bind(this)
  }

  handleChange(e) {
    var editObject = {
      id: this.props.checkpoint.id,
      property: e.target.id,
      value: e.target.value
    }
    this.props.updateEditCheckpoint(editObject)
  }

  deleteCheckpoint(e) {
    e.preventDefault();
    var deletedCheckpointArray = this.props.tour.currentTour.checkpoints.filter(checkpoint => checkpoint.checkpoint !== this.props.checkpoint.id)
    tourDb.doc(this.props.tour.currentTourId).update({
      checkpoints: deletedCheckpointArray
    })
    checkDb.doc(this.props.checkpoint.id).delete()
    .then(() => {
      this.props.deleteCheckpoint(this.props.checkpoint.id)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render(){
    return (
      <div>
        <label>Name</label>
        <input id="name" onChange={this.handleChange} value={this.props.checkpoint.name} />

        <label>Latitude</label>
        <input id="lat" onChange={this.handleChange} value={this.props.checkpoint.lat} />

        <label>Longitude</label>
        <input id="long" onChange={this.handleChange} value={this.props.checkpoint.long} />

        <button onClick={this.deleteCheckpoint}>Delete Checkpoint</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    tour: state.tour
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateTour: updateTour,
    updateEditCheckpoint: updateEditCheckpoint,
    deleteCheckpoint: deleteCheckpoint
  }, dispatch)
}

const connectedCheckpointEdit = connect(mapStateToProps, mapDispatchToProps)(CheckpointEdit)

export default connectedCheckpointEdit
