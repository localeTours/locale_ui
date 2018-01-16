import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    Button,
    Jumbotron
} from 'reactstrap';





class Profile extends Component{
    render(){
      if(!this.props.account.isSignedIn) {
        return <h1>Loading...</h1>
      } else {
        return(
          <Jumbotron>
              <h1>This is your profile page</h1>
              <h2>{this.props.account.user.displayName}</h2>
              <p>email: {this.props.account.user.email}</p>
              <p><Button bsStyle="primary">Learn more</Button></p>
          </Jumbotron>
        )
      }
   }
}

const mapStateToProps = (state) => {
  return {
    account: state.account
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch)
}

const connectedProfile = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default connectedProfile
