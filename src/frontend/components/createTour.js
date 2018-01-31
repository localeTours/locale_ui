import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { storageRef } from "../services/db";
import { createNewTour, getAllUserTours } from "../services/tours";
import { checkLoggedIn } from "../services/users";
import StepOne from './createTourWizard/stepOne';




import { signIn } from '../actions';

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
            number: 1
        }


        this.makeCheckpoint = this.makeCheckpoint.bind(this);
        this.createTourForm = this.createTourForm.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    componentWillMount(){
        checkLoggedIn(this);
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


        storageRef.child('TourImages/' + this.props.account.user.uid).put(e.target.files[0]).then(function(snapshot) {
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



    render() {
        //TODO: Create all Steps. and add the components below.
        //TODO: Attempt to use switch Statements for this logic below.
        //TODO: separate elements from StepOne.js into steps 1,2 and 3.
        //TODO: Use Redux to save information in Form OR update the Parent state
        //TODO: Add Logic for next and back buttons to update this.state.number
        //TODO: Make sure that functions which are now being used in StepOne.js are functional.

        let displayStep = null;
      if (this.state.number === 1){
          displayStep = <StepOne _handleImageChange={ this._handleImageChange.bind(this)}/>;
      } else if (this.state.number === 2){
          displayStep = <StepTwo/>;
      }else if (this.state.number === 3){
          displayStep = <StepThree/>;
      }



        return (

            <div className='create-tour-container'>

                   { displayStep }
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
