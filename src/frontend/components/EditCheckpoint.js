import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { tourDb, checkDb } from "../services/db";
import { deleteCheckpoint, selectTour, updateTour, updateEditCheckpoint } from '../actions';
import { deleteDBCheckpoint } from '../services/checkpoints';

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
      deleteDBCheckpoint(this);
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
