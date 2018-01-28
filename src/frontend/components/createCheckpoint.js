import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { addCreateCheckpoint } from '../actions'

class CreateCheckpoint extends Component {
  constructor(){
    super()
    this.state = {
      checkpoint: null
    }
    this.updateCheckpoint = this.updateCheckpoint.bind(this)
  }

  updateCheckpoint(e) {
    const target = e.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    })
  }

  componentWillMount(){
    var index = this.props.match.params.index
    var checkpoint = this.props.checkpoints.createCheckpoints[index]
    if(!checkpoint){
      checkpoint = this.props.addCreateCheckpoint(null);
    }
    checkpoint.position = index
    this.setState({
      checkpoint: checkpoint
    })
  }

  componentWillUnmount(){
    this.props.addCreateCheckpoint(this.state.checkpoint)
  }

  render(){
    if(!this.state.checkpoint){
      return (
        <h1>Loading</h1>
      )
    } else {
      return(
        <div id="checkpoint-container">
          <label>Checkpoint:</label>
          <input
            type="text"
            name="name"
            onChange={this.updateCheckpoint}
            value={this.state.checkpoint.name}
            ref="checkpointName" />
          <input
            type="number"
            name="latitude"
            onChange={this.updateCheckpoint}
            value={this.state.checkpoint.latitude}
            ref="lat" />
          <input
            type="number"
            name="longitude"
            onChange={this.updateCheckpoint}
            value={this.state.checkpoint.longitude}
            ref="long" />
          <Link to="/tour/checkpoints">Create</Link>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return ({
    account: state.account,
    tour: state.tour,
    checkpoints: state.checkpoints
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addCreateCheckpoint: addCreateCheckpoint
  }, dispatch)
}

const connectedCreateCheckpoint = connect(mapStateToProps, mapDispatchToProps)(CreateCheckpoint)

export default connectedCreateCheckpoint
