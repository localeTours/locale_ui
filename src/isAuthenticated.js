import React, { Component } from 'react';
//import fire from './fire.js';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
//var windowfire = fire;
import App from './App';
import Login from './login';
import Main from './reducers/Main'


class Authenticated extends Component{


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
    // if(!this.state.userReady){
    //   return(<div>Loading...
    //       <Login/>
    //     </div>)
    // } else {
    //   return(
    //     <div>
    //       <App />
    //     </div>
    //   )
    // }
    return (
      <Main />
    )

  }
}

const mapStateToProps = (state) => {
  return({
    signedIn: state.account.signedIn
  })
}

const connectedAuthenticated = withRouter(connect(mapStateToProps)(Authenticated))

export default connectedAuthenticated
