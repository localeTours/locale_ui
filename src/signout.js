import React, { Component } from 'react';
import firebase from 'firebase';

window.windowFire = firebase;

class Signout extends Component{

  signout(){


    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      alert('yoo')
    }).catch(function(error) {
      // An error happened.
        alert('This sucks')
    });
  }

  render(){
    return(
      <div>
        <button onClick={this.signout.bind(this)}>Signout</button>
      </div>
    )
  }
}

export default Signout;
