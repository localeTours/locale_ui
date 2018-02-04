import React, {Component} from 'react';
import {Row, Col, Card, CardHeader, CardBody, Button, Badge, TabContent, TabPane, Nav, NavItem, NavLink, Table, Progress} from 'reactstrap';
import classnames from 'classnames';
import MyToursTab from './UserProfile/myToursTab';
import {getAllUserTours} from "../services/tours";
import {checkLoggedIn} from "../services/users";
import {signIn} from "../actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import { Jumbotron, Container } from 'reactstrap';


class myProfile extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      tours: []
    };
    var divStyle = {
      background: 'white'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  componentDidMount(){
          var self = this;
              checkLoggedIn(this).then(function(response, resolve){
                  getAllUserTours(response).then( (resp, res) => {
                      self.setState({
                          tours: resp
                      });
                  });
              })

          }


  render() {
    var mytours = '';
    if (this.state.tours){
         mytours = this.state.tours.map( (t, i) =>
            <MyToursTab key={i} info={t} />
        )
    } else {
       mytours = 'Loading';
    }

    return (
      <div className="myProfile">
      <style>{"\
                .header{\
                  color:red;\
                  background:blue;\
                }\
              "}</style>

      <style>{"\
                .rr{\
                  color:red;\
                  background:blue;\
                }\
              "}</style>

        <Jumbotron fluid>
          <Container fluid>

          </Container>
        </Jumbotron>
        <div className='profile-image-btn-container'>
          <div className='profile-info'>
            <div>
              <img src='https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg' alt='' height='200' />
            </div>
            <div className='user-details'>
              <div className='user-name'>Adel Charles</div>
              <div className='user-location'>Arizona, US</div>

            </div>

          </div>
          <div className='follow-btn-container'>
            <Button color="success"><i className="fa fa-magic"></i>&nbsp; Follow </Button>
          </div>
        </div>


        <div className='profile-main-container'>
          <div className='about-me'>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">About Me</h4>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          </div>
          <div className='tour-info'>
            <div>
            <Row>
            <Col>
                <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  My Tours
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  Sent To Me
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                  <Table hover responsive className="table-outline mb-0 d-none d-sm-table">

                    <thead className="thead-light">
                    <tr>
                        <th className="text-center"><i className="icon-people"></i></th>
                        <th>Tour Name</th>

                        <th className="text-center">Type</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                  { mytours }
                  </Table>
              </TabPane>
              <TabPane tabId="2">
                  <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th className="text-center"><i className="icon-people"></i></th>
                    <th>Tour Name</th>

                    <th className="text-center">Type</th>
                    <th>Date</th>
                  </tr>
                  </thead>
                      {/*Below is placeholder for sentToursTab*/}
                  {mytours}
                </Table>
              </TabPane>
            </TabContent>
                </Col>
                </Row>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        account: state.account,
        tour: state.tour
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        signIn: signIn
    }, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(myProfile)
