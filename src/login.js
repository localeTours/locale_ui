import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import firebase from 'firebase';
import { signIn } from './actions';

var provider = new firebase.auth.GoogleAuthProvider();


class Login extends Component {

login(){

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

  render(){
    return (
      <div>
        <button onClick={this.login.bind(this)}>Login</button>
        <button onClick={() => this.props.signIn()}>Fake Sign In</button>
        <Link to="/map">Go to map</Link>
      </div>
    )

  }


}

const mapStateToProps = (state) => {
  return ({
    account: state.account
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    signIn: signIn
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
