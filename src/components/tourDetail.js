import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { tourDb, checkDb } from "../services/db";
import { selectTour } from "../actions";
import TourdetailEdit from "./EditTour";


class TourDetail extends React.Component{
    constructor(){
        super();
        this.state = {
            loading: false,
            isEditVisible: false
        };

        this.tour = "";
    }

    componentWillMount(){
        this.setState({
            loading: true
        });
        tourDb.doc(this.props.match.params.tour).get().then((resp) => {
            this.tour = resp.data();
            this.props.selectTour({ currentTourId: resp.id, currentTour: resp.data() })
            this.tour.checkpoints.forEach(c => {
                checkDb.doc(c.checkpoint).get().then((resp) => {
                    console.log(resp.data());
                }).catch((err) => {
                    console.log(err);
                })
            });
            this.setState({
                loading: false
            });
        }).catch((err) => {
            console.log(err);
        });

        this.handleEdit = this.handleEdit.bind(this);
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
                        <h3>{this.tour.name}</h3>
                        <p>Description: {this.tour.description}</p>
                        <p>Checkpoints</p>
                        <ul>
                        {
                            this.tour.checkpoints.map((c, i) =>
                                <li>{c.checkpoint}</li>
                            )
                        }
                        </ul>

                        <button onClick={this.handleEdit}>Edit</button>
                    </div>
                }
                {this.state.isEditVisible ? <TourdetailEdit /> : null}
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
    selectTour: selectTour
  }, dispatch)
}

const connectedTourDeatil = connect(mapStateToProps, mapDispatchToProps)(TourDetail)

export default connectedTourDeatil
