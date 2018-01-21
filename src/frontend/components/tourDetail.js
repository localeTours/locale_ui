import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { tourDb, checkDb } from "../services/db";
import { selectCheckpoints, selectTour, selectTourAndCheckpoints } from '../actions';
import TourdetailEdit from "./EditTour";


class TourDetail extends React.Component{
    constructor(){
        super();
        this.state = {
            loading: false,
            isEditVisible: false
        };

        this.tour = "";
        this.updateEditVisible = this.updateEditVisible.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentWillMount(){
        this.setState({
            loading: true
        });
        this.props.selectTourAndCheckpoints(this.props.match.params.tour);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleDelete() {
      tourDb.doc(this.props.tour.currentTourId).delete().then((resp) => {
        this.props.checkpoints.checkpoints.forEach((checkpoint) => {
          checkDb.doc(checkpoint.id).delete()
          .then(() => {

          })
          .catch((err) => {
            console.log(err)
          })
        })
      })
      .catch((err) => {
        console.log(err)
      });
    }

    mapCheckpoints() {
      if(this.props.checkpoints){
        var checkpoints = this.props.checkpoints.checkpoints.map((c, i) => {
          return <li key={i}>{c.name}</li>
        })
        return checkpoints
      }
    }

    updateEditVisible() {
      this.setState({
        isEditVisible: !this.state.isEditVisible
      })
    }

    handleEdit(e) {
      e.preventDefault();
      this.setState({isEditVisible: !this.state.isEditVisible})
    }

    render(){

        return (
            <div>
                {
                    this.props.checkpoints.checkpoints.length === 0 ?
                    <h3>Loading...</h3>
                    :
                    <div>
                        <h3>{this.props.tour.currentTour.name}</h3>
                        <p>Description: {this.props.tour.currentTour.description}</p>
                        <p>Checkpoints</p>
                        <ul>
                          {this.mapCheckpoints()}
                        </ul>

                        <button onClick={this.handleEdit}>Edit</button>
                        <button onClick={this.handleDelete}>Delete</button>
                    </div>
                }
                {this.state.isEditVisible ? <TourdetailEdit updateEditVisible={this.updateEditVisible} /> : null}
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
    selectTour: selectTour,
    selectCheckpoints: selectCheckpoints,
    selectTourAndCheckpoints: selectTourAndCheckpoints
  }, dispatch)
}

const connectedTourDeatil = connect(mapStateToProps, mapDispatchToProps)(TourDetail)

export default connectedTourDeatil
