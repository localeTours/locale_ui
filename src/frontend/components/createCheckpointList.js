import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

class CheckpointList extends Component {
  listCheckpoints() {
    var createdChkpnts = this.props.checkpoints.createCheckpoints
    var checkpoints = []
    for(var i = 0; i < 10; i++){
      checkpoints.push(
        <li key={i}><Link to={"/tour/checkpoints/create/" + i}>Add Checkpoint {i + 1}</Link><p value={createdChkpnts[i]}></p></li>
      )
    }
    return checkpoints.sort(c => c.position)
  }
  render(){
    return(
      <div id="checkpoint-list-container">
        <ul>
          {this.listCheckpoints()}
        </ul>
      </div>
    )
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

  }, dispatch)
}

const connectedCheckpointList = connect(mapStateToProps, mapDispatchToProps)(CheckpointList)

export default connectedCheckpointList
