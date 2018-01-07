import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { tourDb, checkDb } from "../services/db";
import { selectTour } from "../actions";
import { selectCheckpoints } from '../actions';
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
        tourDb.doc(this.props.match.params.tour).get().then((resp) => {
            this.tour = resp.data();
            this.props.selectTour({ currentTourId: resp.id, currentTour: resp.data() })
            var checkpoints = []
            this.tour.checkpoints.forEach(c => {
                checkDb.doc(c.checkpoint).get().then((resp) => {
                  var checkpoint = resp.data();
                  checkpoints.push({
                    id: resp.id,
                    lat: checkpoint.latitude,
                    long: checkpoint.longitude,
                    name: checkpoint.name
                  })
                    console.log(resp.data());
                }).catch((err) => {
                    console.log(err);
                })
            });
            this.props.selectCheckpoints(checkpoints)
            this.setState({
                loading: false
            });
        }).catch((err) => {
            console.log(err);
        });

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
                    this.state.loading ?
                    <h3>Loading...</h3>
                    :
                    <div>
                        <h3>{this.props.tour.currentTour.name}</h3>
                        <p>Description: {this.props.tour.currentTour.description}</p>
                        <p>Checkpoints</p>
                        <ul>
                        {
                            this.tour.checkpoints.map((c, i) =>
                                <li>{c.checkpoint}</li>
                            )
                        }
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
    tour: state.tour
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectTour: selectTour,
    selectCheckpoints: selectCheckpoints
  }, dispatch)
}

const connectedTourDeatil = connect(mapStateToProps, mapDispatchToProps)(TourDetail)

export default connectedTourDeatil
