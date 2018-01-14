import React from 'react';
import firebase from '../../fire';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon,
Form, FormGroup, Label, FormText} from 'reactstrap';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class AboutMe extends React.Component {
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
                                  <div className='profile-form-two justify-content-center'>
                                    <Form>
                                      <FormGroup>
                                        <Label>Tell us a little more about you</Label>
                                        <Textarea maxlength="5000" placeholder="Type here..." required="required"> </Textarea>
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
