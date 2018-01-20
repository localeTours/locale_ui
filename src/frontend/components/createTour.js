import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";

import { auth, tourDb, checkDb, storageRef, userDb } from "../services/db";
import firebase from '../../fire';
import { signIn } from '../actions';



class CreateTour extends React.Component {

    constructor(){
        super();

        this.state = {
            loading: false,
            tourName: "",
            checkpoints: [],
            tourDescription: "",
            startDate: "",
            endDate: "",
            isPrivate: null,
            inOrder: null
        }

        this.tours = [];

        this.makeCheckpoint = this.makeCheckpoint.bind(this);
        this.createTourForm = this.createTourForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount(){
        if(this.tours.length < 1){
            this.setState({
                loading: true
            });
            var self = this;
              if(this.props.signedIn || localStorage.signedIn) {
                if(!this.props.signedIn) {
                    firebase.auth().onAuthStateChanged((user)=> {
                        self.props.signIn(user)
                        self.getTours();
                        console.log(user);
                    })
                }
              }

        }
    }

    getTours(){
        tourDb.where("creator", "==", this.props.account.user.uid).get().then((resp) => {
            resp.forEach((tour) => {
                var item = {
                    id: tour.id,
                    tour: tour.data().name
                };
                this.tours.push(item);
            });

            this.setState({
                loading: false
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    createTourForm(e){
        e.preventDefault();
        var startDate = new Date(this.state.startDate).toLocaleDateString();
        var endDate = new Date(this.state.endDate).toLocaleDateString();
        var currentState = this.state;
        var passedProps = this.props;
        var checkIdArr = [];
        //Adding Tours to DB
        tourDb.add({
            name: currentState.tourName,
            description: currentState.tourDescription,
            startDate: startDate,
            endDate: endDate,
            isPrivate: currentState.isPrivate,
            inOrder: currentState.inOrder,
            creator: this.props.account.user.uid
          }).then(function(doc){
            var docToUp = tourDb.doc(doc.id);
            // Adding checkpoints here. Still WIP
            currentState.checkpoints.forEach((check, i) => {
                checkDb.add({
                    name: check.checkpointName,
                    longitude: check.long,
                    latitude: check.lat,
                    tour: doc.id
                }).then(function(checkDoc){
                    checkIdArr.push({
                        checkpoint: checkDoc.id
                    });
                    return docToUp.update({
                        checkpoints: checkIdArr
                    });
                }).then(function(res){
                    console.log(res);
                }).catch(function(err){
                    console.log(err);
                });
            });
            console.log(checkIdArr);

          }).catch(function(err){
            console.log(err);
          })
    }

    makeCheckpoint(e){
        //Makes the checkpoint then adds to checkpoint state
        e.preventDefault();

        var newArr = this.state.checkpoints.slice();
        var data = {
            checkpointName: this.refs.checkpointName.value,
            lat: this.refs.lat.value,
            long: this.refs.long.value
        };
        newArr.push(data);

        this.setState({
            checkpoints: newArr
        });

    }

    _handleImageChange(e){
        storageRef.child('UserProfileImages/' + this.props.account.user.uid).put(e.target.files[0]).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            debugger;
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

    handleChange(e){
        //For the inputs of the tour form
        e.preventDefault();

        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render(){
        // Tour form and Checkpoint form
        return (
            <div>
                {
                    this.state.loading ?
                    <h3>Loading....</h3>
                    :
                    this.tours.map((t, i) =>
                        <Link key={i} to={"/tour/"+t.id}>{t.tour}</Link>
                    )
                }
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
                    <form onSubmit={this._handleUploadSubmit.bind(this)}>
                        <input type="file" onChange={this._handleImageChange.bind(this)} />
                    </form>


                    <label>Checkpoint(s):</label>
                    <input type="text" ref="checkpointName" />
                    <input type="number" ref="lat" />
                    <input type="number" ref="long" />
                    <ul>
                        {
                            this.state.checkpoints.length > 0 ?
                            this.state.checkpoints.map((check, index) =>
                                <li key={index}>Checkpoint Name: {check.checkpointName}, Lat: {check.lat}, Long: {check.long}</li>
                            )
                            :
                            <li>No checkpoints</li>
                        }
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
    tour: state.tour
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    signIn: signIn
  }, dispatch)
}

const connectedCreateTour = connect(mapStateToProps, mapDispatchToProps)(CreateTour)
export default connectedCreateTour
