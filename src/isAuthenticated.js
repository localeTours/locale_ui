import React, { Component } from 'react';
//import fire from './fire.js';
import firebase from 'firebase';
//var windowfire = fire;

export default class Authenticated extends Component{


  constructor(props){
    super(props);
    this.state = {userReady:false}
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user)=>{
      if (user) {
        this.setState({userReady:true , uid:user.uid})
      } else {
        this.setState({userReady:false})
      }
    });
  }
  render(){
    if(!this.state.userReady){
      return(<div>Loading...</div>)
    }
    return(
      <div>
      </div>
    )
  }
}
