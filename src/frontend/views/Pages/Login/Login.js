import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon,
Form, FormGroup, Label, FormText} from 'reactstrap';
import { Redirect } from 'react-router-dom';

//SERVICE CALLS
import firebase from '../../../../fire';
import { createUserWithEmailAndPassword, signInWithPopup, checkLoggedIn } from "../../../services/users";

//Redux dependencies and actions
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { signIn } from '../../../actions/index';

//Google Auth
var provider = new firebase.auth.GoogleAuthProvider();

class Login extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn:false,
      email: '',
      pass: '',
      fullName: ''
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentWillMount(){
      // This will check if the user has been signed in previously due to re-routing by manually changing the url.
      checkLoggedIn(this);
  }

  handleOnChange(ev){
      ev.preventDefault();
      const target = ev.target;
      const value = target.value;
      const name = target.name;

      this.setState({
          [name]: value
      })
  }

  handleOnSubmit(){
      createUserWithEmailAndPassword(this);
  }

    login(){
        signInWithPopup(this);
    }

  render() {
     var signedIn = localStorage.signedIn === 'true' ? true : false;
      //var userProfile = '/user/' + localStorage.uid;
      let completeProf = '/completeprof/' + localStorage.uid;

      let stylishCard = {
          width: '50%'
      }
    return (
        this.state.loggedIn || signedIn ?
            <Redirect to={completeProf} />
            :
            <div className="app flex-row align-items-center">
              <Container style={ stylishCard }>
                <Row className="justify-content-center">
                    <Col xs="12">
                        <CardGroup>
                            <Card  className="text-black bg-secondary py-5 d-md-down-none p-4" >
                                <CardBody className="text-center">
                                  <div>
                                      <h2>Sign-Up</h2>
                                      <Form>
                                          <FormGroup>
                                            <Label>Name</Label>
                                            <Input type="text" name="fullName" placeholder="Full Name" onChange={ this.handleOnChange } />
                                          </FormGroup>
                                          <FormGroup>
                                            <Label>Email</Label>
                                            <Input type="email" name="email" placeholder="email@mail.com" onChange={ this.handleOnChange } />
                                          </FormGroup>
                                          <FormGroup>
                                            <Label>Password</Label>
                                            <Input type="password" name="pass" placeholder="password" onChange={ this.handleOnChange } />
                                          </FormGroup>
                                          <Button onClick={ this.handleOnSubmit } className="btn-dark">Submit</Button>
                                      </Form><br/>
                                  <h2>Sign-Up With Google</h2>
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
