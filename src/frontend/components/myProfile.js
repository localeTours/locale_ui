import React, {Component} from 'react';
import {Row, Col, Card, CardHeader, CardBody, Button, Badge, TabContent, TabPane, Nav, NavItem, NavLink, Table, Progress} from 'reactstrap';
import classnames from 'classnames';
import MyToursTab from './UserProfile/myToursTab';
import {getAllUserTours} from "../services/tours";
import {checkLoggedIn} from "../services/users";
import {signIn} from "../actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";




class MyProfile extends Component {
  constructor(props) {
    super(props);

      this.state = {
          tours: []
      }



      this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
    var divStyle = {
      background: 'white'
    };
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


  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
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

        <h1>Your PROFILE here!</h1>
        <div className='profile-banner'></div>
      <p>TODO:</p>
      <ul>
        <li>Follow Button</li>
        <li>Background Banner</li>
        <li>Profile Picture</li>
        <li>Table and tab nav</li>
      </ul>
      <Button color="success"><i className="fa fa-magic"></i>&nbsp; Follow </Button>
      <br></br>
      <br></br>

      <Row>
      <Col xs="12" md="12" className="mb-4">
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



export default connect(mapStateToProps, mapDispatchToProps)(MyProfile)
