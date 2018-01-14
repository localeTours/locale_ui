import React from 'react';
import firebase from '../../fire';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon,
Form, FormGroup, Label, FormText} from 'reactstrap';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class UserRegister extends React.Component {
    constructor(){
        super();
        this.state={
            username: '',
            profpic: ''
        }
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
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
        let AboutMe = '/aboutme/' + localStorage.uid;
        return(
            <Redirect to={ AboutMe }/>
        )
    }

    render(){
        let stylishCard = {
            width: '50%'
        }
        return(
            <div className="app flex-row align-items-center">
              <Container style={ stylishCard }>
                <Row className="justify-content-center">
                    <Col xs="12">
                        <CardGroup>
                            <Card  className="text-black bg-secondary py-5 d-md-down-none p-4" >
                                <CardBody className="text-center">
                                  <div className='profile-form-one justify-content-center'>
                                    <Form onSubmit={this.handleOnSubmit}>
                                      <FormGroup>
                                        <div>
                                          <legend>Profile</legend>
                                          <p>{ localStorage.userName + ', '} let's complete your profile</p>
                                        </div>
                                        <div className="profile-bg">
                                            <h5>Upload Profile Picture</h5>
                                        </div><br/>
                                    <input type="file" name='profpic'/>
                                        <FormGroup>
                                          <Label className=''>Enter a username</Label>
                                          <Input type='text' name='username'/>
                                        </FormGroup>
                                      <Button className="btn-dark" >Next</Button>
                                    </FormGroup>
                                  </Form>
                                  </div>
                                </CardBody>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
              </Container>
            </div>
        )
    }
}

export default UserRegister;
