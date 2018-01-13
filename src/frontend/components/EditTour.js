import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { tourDb, checkDb } from "../services/db";
import { selectTour } from "../../actions";
import { updateTour } from '../../actions';
import { updateCheckpointsWithEdit } from '../../actions';
import CheckpointEdit from './EditCheckpoint'


class TourDetailEdit extends React.Component{
  constructor() {
    super()
    this.state = {
      tour: {
        editDescription: "",
        editTitle: ""
      },
      checkpoints: []
    }
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      tour: {
        editDescription: this.props.tour.currentTour.description,
        editTitle: this.props.tour.currentTour.name
      },
      checkpoints: this.props.checkpoints
    })
  }

  handleEditSubmit(e) {
    e.preventDefault()
    tourDb.doc(this.props.tour.currentTourId).update({
      description: this.state.tour.editDescription,
      name: this.state.tour.editTitle
    })
    this.props.checkpoints.editCheckpoints.forEach((checkpoint) => {
      checkDb.doc(checkpoint.id).update({
        latitude: checkpoint.lat,
        longitude: checkpoint.long,
        name: checkpoint.name
      })
    })
    this.props.updateTour(this.state.tour);
    this.props.updateCheckpointsWithEdit();
    this.props.updateEditVisible();
  }

  handleDescriptionChange(e) {
    var updatedTour = Object.assign({}, this.state.tour, {editDescription: e.target.value})
    this.setState(Object.assign({}, this.state, {tour: updatedTour}))
  }

  handleTitleChange(e) {
    var updatedTour = Object.assign({}, this.state.tour, {editTitle: e.target.value})
    this.setState(Object.assign({}, this.state, {tour: updatedTour}))
  }

  render(){
    var checkpoints = this.props.checkpoints.editCheckpoints.map((checkpoint) => {
      return <CheckpointEdit checkpoint={checkpoint} />
    })
    return (
      <div>
        <form onSubmit={this.handleEditSubmit}>
          <label>Title</label>
          <input onChange={this.handleTitleChange} value={this.state.tour.editTitle} />

          <label>Description</label>
          <input onChange={this.handleDescriptionChange} value={this.state.tour.editDescription} />
          {checkpoints}
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    tour: state.tour,
    checkpoints: state.checkpoints
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateTour: updateTour,
    updateCheckpointsWithEdit: updateCheckpointsWithEdit
  }, dispatch)
}

const connectedTourDeatilEdit = connect(mapStateToProps, mapDispatchToProps)(TourDetailEdit)

export default connectedTourDeatilEdit
