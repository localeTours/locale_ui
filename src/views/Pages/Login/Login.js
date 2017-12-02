import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import { Redirect } from 'react-router-dom';

//SERVICE CALLS
import firebase from '../../../fire';
import { createUser } from "../../../services/users";

//Redux dependencies and actions
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { signIn } from '../../../actions';

//Google Auth
var provider = new firebase.auth.GoogleAuthProvider();

class Login extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn:false
    }
  }

  componentWillMount(){
      // This will check if the user has been signed in previously due to re-routing by manually changing the url.
    var self = this;
      if(this.props.signedIn || localStorage.signedIn) {
        if(!this.props.signedIn) {
            firebase.auth().onAuthStateChanged((user)=> {
                self.props.signIn(user)
            })
        }
      }

  }


    login(){
        var self = this;
        firebase.auth().signInWithPopup(provider).then(function(user) {

         createUser(user).then((resp) => {
             self.props.signIn(user);
             localStorage.uid = user.user.uid;
             localStorage.signedIn = true;
             self.setState({
                 loggedIn: true
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


  render() {
     var signedIn = localStorage.signedIn === 'true' ? true : false;
      var userProfile = '/user/' + localStorage.uid;

    return (
        this.state.loggedIn || signedIn ?
            <Redirect to={userProfile} />
            :
            <div className="app flex-row align-items-center">
              <Container>
                <Row className="justify-content-center">
                    <Col xs="12">
                        <CardGroup>
                            <Card className="text-white bg-success py-5 d-md-down-none p-4" >
                                <CardBody className="text-center">
                                  <div>
                                      <h2>Login</h2>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                          labore et dolore magna aliqua.</p>
                                      <Button className="btn-google-plus" block onClick={this.login.bind(this)}><span>Google</span></Button>
                                  </div>
                                </CardBody>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
              </Container>
            </div>
    );
  }
}


const mapStateToProps = (state) => {
    return({
        signedIn: state.account.signedIn
    })
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        signIn: signIn
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));


