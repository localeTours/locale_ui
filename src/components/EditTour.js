import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { tourDb, checkDb } from "../services/db";
import { selectTour } from "../actions";
import { updateTour } from '../actions';


class TourDetailEdit extends React.Component{
  constructor() {
    super()
    this.state = {
      editDescription: "",
      editTitle: ""
    }
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      editDescription: this.props.tour.currentTour.description,
      editTitle: this.props.tour.currentTour.name
    })
  }

  handleEditSubmit(e) {
    e.preventDefault()
    tourDb.doc(this.props.tour.currentTourId).update({
      description: this.state.editDescription,
      name: this.state.editTitle
    })
  }

  handleDescriptionChange(e) {
    this.setState({
      editDescription: e.target.value
    })
  }

  handleTitleChange(e) {
    this.setState({
      editTitle: e.target.value
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleEditSubmit}>
          <label>Title</label>
          <input onChange={this.handleTitleChange} value={this.state.editTitle} />

          <label>Description</label>
          <input onChange={this.handleDescriptionChange} value={this.state.editDescription} />

          <input type="submit" value="submit"/>
        </form>
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
    updateTour: updateTour
  }, dispatch)
}

const connectedTourDeatilEdit = connect(mapStateToProps, mapDispatchToProps)(TourDetailEdit)

export default connectedTourDeatilEdit
