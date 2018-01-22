import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";

import { auth, tourDb, checkDb, storageRef, userDb } from "../services/db";
import { createNewTour, getAllUserTours } from "../services/tours";
import { checkLoggedIn } from "../services/users";


import firebase from '../../fire';
import { signIn } from '../actions';

// import { Form, Label, FormGroup, Button, Input } from 'reactstrap';
import { Button } from 'reactstrap';



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
            inOrder: null,
            tours: []
        }


        this.makeCheckpoint = this.makeCheckpoint.bind(this);
        this.createTourForm = this.createTourForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount(){
        var self = this;
        if(this.state.tours.length < 1){
            this.setState({
                loading: true
            });

            checkLoggedIn(this).then(function(response, resolve){

                getAllUserTours(response).then( (resp, res) => {
                    self.setState({
                        tours: resp
                    });

                });
                self.setState({
                    loading: false
                });

            })

        }
    }





    createTourForm(e){
        e.preventDefault();
        createNewTour(this);
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

        storageRef.child('UserProfileImages/' + this.props.account.user.uid).put(e.target.files[0]).then(function(snapshot) {
            console.log('Uploaded a blob or file!');
            this.setState({
                userImage: snapshot.downLoadUrl
            })
        });
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
            <div className='create-tour-container'>
                {
                    this.state.loading ?
                    <h3>Loading....</h3>
                    :
                    this.state.tours.map((t, i) =>
                        <Link key={i} to={"/tour/"+t.id}>{t.tour}</Link>
                    )
                }
                <form className='tour-form' onSubmit={this.createTourForm}>
                  <div className='tourName'>
                    <label htmlFor="tourName"></label>
                    <input onChange={this.handleChange} type="text" name="tourName" placeholder='Tour Name' />
                  </div>

                  <h1>FEATURES</h1>
                  <div className='tour-features-container'>
                    <div className='left-checkboxes'>
                      <div>
                        <label htmlFor="requireCheckin">Require Check-in</label>
                        <input type='checkbox' />
                      </div>
                      <div>
                        <label htmlFor="commentSection">Comment Section</label>
                        <input type='checkbox' />
                      </div>
                      <div>
                        <label htmlFor="reactions">Reactions</label>
                        <input type='checkbox' />
                      </div>
                      <div>
                        <label htmlFor="hasToBeInOrderCheckpoints">Checkpoints in Order?</label>
                        <input onChange={this.handleChange} type="checkbox" name="inOrder"/>
                      </div>
                    </div>

                    <div className='right-checkboxes'>

                      <div>
                        <label htmlFor="requireCheckin">Timed</label>
                        <input type='checkbox' />
                      </div>
                      <div>
                        <label htmlFor="isPrivate">Is Private?</label>
                        <input onChange={this.handleChange} type="checkbox" name="isPrivate"/>
                      </div>
                      <div>
                        <label htmlFor="date-time">Date/Time</label>
                        <input type='checkbox' />
                      </div>
                    </div>
                  </div>

                  <div className='tour-description'>
                    <label htmlFor="tourDescription">Tour Description</label>
                    <textarea onChange={this.handleChange} type="text" name="tourDescription" maxLength='5000'/>
                  </div>

                  <div className='start-end-date-container'>
                    <label htmlFor="startDate">Start Date</label>
                    <input onChange={this.handleChange} type="date" name="startDate"/>

                    <label htmlFor="endDate">End Date</label>
                    <input onChange={this.handleChange} type="date" name="endDate"/>
                  </div>

                    {/* <label htmlFor="isPrivate">Is Private?</label>
                    <input onChange={this.handleChange} type="checkbox" name="isPrivate"/> */}

                    {/* <label htmlFor="hasToBeInOrderCheckpoints">Checkpoints in Order?</label>
                    <input onChange={this.handleChange} type="checkbox" name="inOrder"/> */}


                    <div className='file-select-container'>
                        {/* <label className=''>Choose file</label> */}
                        <input type="file" onChange={this._handleImageChange.bind(this)} />
                    </div>


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
                <div className='tour-footer-btns'>
                  <Button className='cancel-btn'>Cancel</Button>
                  <Button className='next-btn'>Next</Button>
                </div>
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
export default connectedCreateTour;
