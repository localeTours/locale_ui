import React, { Component } from 'react';
import firebase from '../fire';
import { Redirect } from 'react-router-dom';


//Redux Dependencies
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';

//Actions
import { signOut } from '../actions/index';


window.windowFire = firebase;

class Signout extends Component{
    constructor(){
        super();
        this.state={
            redirect: false
        }

    }

  signout(){

    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      alert('yoo')
        this.props.signOut();
      this.setState({redirect:true});

    }.bind(this) ).catch(function(error) {
      // An error happened.
        alert('This sucks')
    });
  }

  render(){
      if (this.state.redirect) {
          return <Redirect to='/login'/>;
      } else {
          return(
              <div>
                  <button onClick={this.signout.bind(this)}>Signout</button>
              </div>
          )
      }

  }
}


const mapStateToProps = (state) => {
    return({
        signedIn: state.account.signedIn
    })
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        signOut: signOut
    }, dispatch)
}


const connectedSignout = withRouter(connect(mapStateToProps, mapDispatchToProps)(Signout));

export default connectedSignout;


