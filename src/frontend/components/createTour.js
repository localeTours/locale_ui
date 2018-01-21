import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";

import { auth, tourDb, checkDb, storageRef, userDb } from "../services/db";
import firebase from '../../fire';
import { signIn,
         updateCreateTour,
         getTours,
         addCheckpoint,
         createTour } from '../actions';

class CreateTour extends React.Component {
    constructor(){
        super();
        this.state = {
            loading: false
        }

        this.makeCheckpoint = this.makeCheckpoint.bind(this);
        this.createTourForm = this.createTourForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount(){
        if(this.props.account.tours.length < 1){
            this.setState({
                loading: true
            });
            var self = this;
              if(this.props.signedIn || localStorage.signedIn) {
                if(!this.props.signedIn) {
                    firebase.auth().onAuthStateChanged((user)=> {
                        self.props.signIn(user)
                        self.props.getTours(user.uid)
                    })
                }
              }
        }
    }

    createTourForm(e){
        e.preventDefault();
        var createTour = this.props.tour.createTour;
        var startDate = new Date(createTour.startDate).toLocaleDateString();
        var endDate = new Date(createTour.endDate).toLocaleDateString();
        var passedProps = this.props;
        var createdTour = {
          name: createTour.tourName,
          description: createTour.tourDescription,
          startDate: startDate,
          endDate: endDate,
          isPrivate: createTour.isPrivate,
          inOrder: createTour.inOrder,
          creator: this.props.account.user.uid
        }
        this.props.createTour({tour: createdTour, checkpoints: this.props.checkpoints.checkpoints})
    }

    makeCheckpoint(e){
        //Makes the checkpoint then adds to checkpoint state
        e.preventDefault();
        var data = {
            checkpointName: this.refs.checkpointName.value,
            lat: this.refs.lat.value,
            long: this.refs.long.value
        };
        this.props.addCheckpoint(data);
    }

    _handleImageChange(e){
        storageRef.child('UserProfileImages/' + this.props.account.user.uid).put(e.target.files[0]).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            this.setState({
                userImage: snapshot.downloadURL
            })
            userDb.doc(this.props.account.user.uid).update({
              profileImage: snapshot.downloadURL
            })
        });
    }
    _handleUploadSubmit(e){
    }

    showtours() {
      if(this.props.account.tours.length > 0){
        return (
          this.props.account.tours.map((t, i) =>
              <Link key={i} to={"/tour/"+t.id}>{t.tour}</Link>
          )
        )
      } else {
        return <h3>Loading...</h3>
      }
    }

    showCheckpoints() {
      if(this.props.checkpoints.checkpoints.length > 0){
        return (
          this.props.checkpoints.checkpoints.map((check, i) =>
            <li key={i}>Checkpoint Name: {check.checkpointName}, Lat: {check.lat}, Long: {check.long}</li>
          )
        )
      } else {
          return <li>No checkpoints</li>
      }
    }

    handleChange(e){
        //For the inputs of the tour form
        e.preventDefault();

        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.props.updateCreateTour({ [name]: value })
    }

    render(){
        // Tour form and Checkpoint form
        return (
            <div>
                {this.showtours()}
                <form onSubmit={this.createTourForm}>
                    <label htmlFor="tourName">Tour Name</label>
                    <input onChange={this.handleChange} type="text" name="tourName" />

                    <label htmlFor="tourDescription">Tour Description</label>
                    <input onChange={this.handleChange} type="text" name="tourDescription"/>

                    <label htmlFor="startDate">Start Date</label>
                    <input onChange={this.handleChange} type="date" name="startDate"/>

                    <label htmlFor="endDate">End Date</label>
                    <input onChange={this.handleChange} type="date" name="endDate"/>

                    <label htmlFor="isPrivate">Is Private?</label>
                    <input onChange={this.handleChange} type="checkbox" name="isPrivate"/>

                    <label htmlFor="hasToBeInOrderCheckpoints">Checkpoints in Order?</label>
                    <input onChange={this.handleChange} type="checkbox" name="inOrder"/>


                    Choose file
                    <form >
                        <input type="file" onChange={this._handleImageChange.bind(this)} />
                    </form>


                    <label>Checkpoint(s):</label>
                    <input type="text" ref="checkpointName" />
                    <input type="number" ref="lat" />
                    <input type="number" ref="long" />
                    <ul>
                        {this.showCheckpoints()}
                    </ul>
                    <button onClick={this.makeCheckpoint}>Make Checkpoint</button>

                    <input type="submit" value="make tour" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    account: state.account,
    tour: state.tour,
    checkpoints: state.checkpoints
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    signIn: signIn,
    updateCreateTour: updateCreateTour,
    getTours: getTours,
    addCheckpoint: addCheckpoint,
    createTour: createTour
  }, dispatch)
}

const connectedCreateTour = connect(mapStateToProps, mapDispatchToProps)(CreateTour)
export default connectedCreateTour
