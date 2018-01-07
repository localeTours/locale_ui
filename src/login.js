import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { auth } from 'firebase';
import { signIn } from './actions';
import { createUser } from "./services/users";

var provider = new auth.GoogleAuthProvider();


class Login extends Component {

  constructor(){
    super();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      user: null
    };
  }

  componentDidMount(){
    auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({
          user: user
        });
      } else {
        this.setState({
          user: null
        });
      }
    })
  }

  login(){
    let self = this;

    auth().signInWithPopup(provider).then(function(result) {
      createUser(result).then((resp) => {
        self.setState({
          user: resp
        });
        console.log(self.state);
      }).catch((err) => {
        console.log(err);
      })
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

  logout(){
    auth().signOut().then((res) => {
      console.log(res);
      this.setState({
        user: null
      });
    }).catch((err) => {
      console.log(err);
    })
  }

  render(){
    return (
      <div>
      {
        this.state.user ?
        <div>
          <Link to="/map">Go to map</Link>
          <button onClick={this.logout}>Logout</button>
        </div>
        :
        <div>
          <button onClick={this.login}>Login</button>
          <button onClick={() => this.props.signIn()}>Fake Sign In</button>
        </div>
      }
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
