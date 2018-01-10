import React, {Component} from 'react';
import {Row, Col, Card, CardHeader, CardBody, Button, Badge, TabContent, TabPane, Nav, NavItem, NavLink, Table, Progress} from 'reactstrap';
import classnames from 'classnames';



class myProfile extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
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

 

  render() {
    return (

      
      <div className="myProfile">
      <style>{"\
                .header{\
                  color:red;\
                  background:blue;\
                }\
              "}</style>

      <div className="header">Locale: "You had to be there"</div>
      
      <style>{"\
                .rr{\
                  color:red;\
                  background:blue;\
                }\
              "}</style>
        <h1>Your PROFILE here!</h1>
      <p>TODO:</p>
      <ul>
        <li>Follow Button</li>
        <li>Background Banner</li>
        <li>Profile Picture</li>
        <li>Table and tab nav</li>
      </ul>
      <Button color="success"><i className="fa fa-magic"></i>&nbsp; Follow </Button>
      <br></br>

      <Row>
      <Col xs="12" md="6" className="mb-4">
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
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                  Messages
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
              <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
              <thead className="thead-light">
              <tr>
                <th className="text-center"><i className="icon-people"></i></th>
                <th>User</th>
                <th className="text-center">Country</th>
                <th>Usage</th>
                <th className="text-center">Payment Method</th>
                <th>Activity</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td className="text-center">
                  <div className="avatar">
                    <img src={'img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                    <span className="avatar-status badge-success"></span>
                  </div>
                </td>
                <td>
                  <div>Yiorgos Avraamu</div>
                  <div className="small text-muted">
                    <span>New</span> | Registered: Jan 1, 2015
                  </div>
                </td>
                <td className="text-center">
                  <img src={'img/flags/USA.png'} alt="USA" style={{height: 24 + 'px'}}/>
                </td>
                <td>
                  <div className="clearfix">
                    <div className="float-left">
                      <strong>50%</strong>
                    </div>
                    <div className="float-right">
                      <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                    </div>
                  </div>
                  <Progress className="progress-xs" color="success" value="50"/>
                </td>
                <td className="text-center">
                  <i className="fa fa-cc-mastercard" style={{fontSize: 24 + 'px'}}></i>
                </td>
                <td>
                  <div className="small text-muted">Last login</div>
                  <strong>10 sec ago</strong>
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <div className="avatar">
                    <img src={'img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                    <span className="avatar-status badge-danger"></span>
                  </div>
                </td>
                <td>
                  <div>Avram Tarasios</div>
                  <div className="small text-muted">

                    <span>Recurring</span> | Registered: Jan 1, 2015
                  </div>
                </td>
                <td className="text-center">
                  <img src={'img/flags/Brazil.png'} alt="Brazil" style={{height: 24 + 'px'}}/>
                </td>
                <td>
                  <div className="clearfix">
                    <div className="float-left">
                      <strong>10%</strong>
                    </div>
                    <div className="float-right">
                      <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                    </div>
                  </div>
                  <Progress className="progress-xs" color="info" value="10"/>
                </td>
                <td className="text-center">
                  <i className="fa fa-cc-visa" style={{fontSize: 24 + 'px'}}></i>
                </td>
                <td>
                  <div className="small text-muted">Last login</div>
                  <strong>5 minutes ago</strong>
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <div className="avatar">
                    <img src={'img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                    <span className="avatar-status badge-warning"></span>
                  </div>
                </td>
                <td>
                  <div>Quintin Ed</div>
                  <div className="small text-muted">
                    <span>New</span> | Registered: Jan 1, 2015
                  </div>
                </td>
                <td className="text-center">
                  <img src={'img/flags/India.png'} alt="India" style={{height: 24 + 'px'}}/>
                </td>
                <td>
                  <div className="clearfix">
                    <div className="float-left">
                      <strong>74%</strong>
                    </div>
                    <div className="float-right">
                      <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                    </div>
                  </div>
                  <Progress className="progress-xs" color="warning" value="74"/>
                </td>
                <td className="text-center">
                  <i className="fa fa-cc-stripe" style={{fontSize: 24 + 'px'}}></i>
                </td>
                <td>
                  <div className="small text-muted">Last login</div>
                  <strong>1 hour ago</strong>
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <div className="avatar">
                    <img src={'img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                    <span className="avatar-status badge-secondary"></span>
                  </div>
                </td>
                <td>
                  <div>Enéas Kwadwo</div>
                  <div className="small text-muted">
                    <span>New</span> | Registered: Jan 1, 2015
                  </div>
                </td>
                <td className="text-center">
                  <img src={'img/flags/France.png'} alt="France" style={{height: 24 + 'px'}}/>
                </td>
                <td>
                  <div className="clearfix">
                    <div className="float-left">
                      <strong>98%</strong>
                    </div>
                    <div className="float-right">
                      <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                    </div>
                  </div>
                  <Progress className="progress-xs" color="danger" value="98"/>
                </td>
                <td className="text-center">
                  <i className="fa fa-paypal" style={{fontSize: 24 + 'px'}}></i>
                </td>
                <td>
                  <div className="small text-muted">Last login</div>
                  <strong>Last month</strong>
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <div className="avatar">
                    <img src={'img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                    <span className="avatar-status badge-success"></span>
                  </div>
                </td>
                <td>
                  <div>Agapetus Tadeáš</div>
                  <div className="small text-muted">
                    <span>New</span> | Registered: Jan 1, 2015
                  </div>
                </td>
                <td className="text-center">
                  <img src={'img/flags/Spain.png'} alt="Spain" style={{height: 24 + 'px'}}/>
                </td>
                <td>
                  <div className="clearfix">
                    <div className="float-left">
                      <strong>22%</strong>
                    </div>
                    <div className="float-right">
                      <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                    </div>
                  </div>
                  <Progress className="progress-xs" color="info" value="22"/>
                </td>
                <td className="text-center">
                  <i className="fa fa-google-wallet" style={{fontSize: 24 + 'px'}}></i>
                </td>
                <td>
                  <div className="small text-muted">Last login</div>
                  <strong>Last week</strong>
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <div className="avatar">
                    <img src={'img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                    <span className="avatar-status badge-danger"></span>
                  </div>
                </td>
                <td>
                  <div>Friderik Dávid</div>
                  <div className="small text-muted">
                    <span>New</span> | Registered: Jan 1, 2015
                  </div>
                </td>
                <td className="text-center">
                  <img src={'img/flags/Poland.png'} alt="Poland" style={{height: 24 + 'px'}}/>
                </td>
                <td>
                  <div className="clearfix">
                    <div className="float-left">
                      <strong>43%</strong>
                    </div>
                    <div className="float-right">
                      <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                    </div>
                  </div>
                  <Progress className="progress-xs" color="success" value="43"/>
                </td>
                <td className="text-center">
                  <i className="fa fa-cc-amex" style={{fontSize: 24 + 'px'}}></i>
                </td>
                <td>
                  <div className="small text-muted">Last login</div>
                  <strong>Yesterday</strong>
                </td>
              </tr>
              </tbody>
            </Table>
              </TabPane>
              <TabPane tabId="2">
                2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </TabPane>
              <TabPane tabId="3">
                2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </TabPane>
            </TabContent>
          </Col>
          </Row>
      </div>

    )
  }
}

export default myProfile;
