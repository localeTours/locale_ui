import React from 'react';
import firebase from '../../fire';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon,
Form, FormGroup, Label, FormText} from 'reactstrap';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class AboutMe extends React.Component {
    constructor(){
        super();
        this.state={
            aboutMe: '',
            complete: false
        }
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
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
        let self = this;
        self.setState({
            complete: true
        })
    }

    render(){
        let stylishCard = {
            width: '50%'
        }
        let userProfile = '/user/' + localStorage.uid;
        return(
            this.state.complete ?
                <Redirect to={userProfile}/>
            :
            <div className="app flex-row align-items-center">
              <Container style={ stylishCard }>
                <Row className="justify-content-center">
                    <Col xs="12">
                        <CardGroup>
                            <Card  className="text-black bg-secondary py-5 d-md-down-none p-4" >
                                <CardBody className="text-center">
                                  <div className='profile-form-two justify-content-center'>
                                    <Form>
                                      <FormGroup>
                                        <h4>Tell us a little more about you</h4>
                                        <Input type="textarea" placeholder="I'm ..." maxLength="4000" name="aboutMe" autoFocus/><br/>
                                        <Button className="btn-dark" onClick={ this.handleOnSubmit }>Next</Button>
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

export default AboutMe;
