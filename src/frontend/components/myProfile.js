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

      <style>{"\
                .rr{\
                  color:red;\
                  background:blue;\
                }\
              "}</style>

        <div className='profile-banner'></div>
        <div className='profile-image-btn-container'>
          <div className='profile-info'>
            <div>
              <img src='https://410j80383xfr3tqxi01piyu7-wpengine.netdna-ssl.com/wp-content/themes/greenct/assets/images/user-icon-placeholder.jpg' height='200' />
            </div>
            <div className='user-details'>
              <div className='user-name'>username</div>
              <div className='user-location'>location</div>
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
                        Going
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
                      <th className="text-center">Country</th>
                      <th>City</th>
                      <th className="text-center">Type</th>
                      <th>Date</th>
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
                        <div>Biking NYC with Trek</div>
                      </td>
                      <td className="text-center">
                        <img src={'img/flags/USA.png'} alt="USA" style={{height: 24 + 'px'}}/>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>New York City</strong>
                          </div>
                      <br/>
                          <div className="float-left">
                            <small className="text-muted">Mid-town Manhattan</small>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <i className="fa fa-bicycle" style={{fontSize: 24 + 'px'}}></i>
                      </td>
                      <td>
                        <div className="small text-muted">July</div>
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
                        <div>Where's Tom Jobim hidden?</div>
                      </td>
                      <td className="text-center">
                        <img src={'img/flags/Brazil.png'} alt="Brazil" style={{height: 24 + 'px'}}/>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>Rio de Janeiro</strong>
                          </div>
                          <div className="float-left">
                            <small className="text-muted">Barra da Tijuca</small>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <i className="fa fa-music" style={{fontSize: 24 + 'px'}}></i>
                      </td>
                      <td>
                        <div className="small text-muted">June</div>
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
                        <div>Himalayan Tour</div>
                      </td>
                      <td className="text-center">
                        <img src={'img/flags/India.png'} alt="India" style={{height: 24 + 'px'}}/>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>Nepal</strong>
                          </div>
                          <div className="float-left">
                            <small className="text-muted">Langtang National Park</small>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <i className="fa fa-tree" style={{fontSize: 24 + 'px'}}></i>
                      </td>
                      <td>
                        <div className="small text-muted">April</div>
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
                        <div>From Arc de Triomphe to Eiffel Tower</div>
                      </td>
                      <td className="text-center">
                        <img src={'img/flags/France.png'} alt="France" style={{height: 24 + 'px'}}/>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>Paris</strong>
                          </div>
                          <div className="float-left">
                            <small className="text-muted">8th arrondissement of Paris</small>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <i className="fa fa-road" style={{fontSize: 24 + 'px'}}></i>
                      </td>
                      <td>
                        <div className="small text-muted">April</div>
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
                        <div>Tour del Parque Maria Luisa</div>
                      </td>
                      <td className="text-center">
                        <img src={'img/flags/Spain.png'} alt="Spain" style={{height: 24 + 'px'}}/>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>Sevilla</strong>
                          </div>
                          <div className="float-left">
                            <small className="text-muted">San Bernardo</small>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <i className="fa fa-tree" style={{fontSize: 24 + 'px'}}></i>
                      </td>
                      <td>
                        <div className="small text-muted">January</div>
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
                        <div>Meet Warsaw Royal Castle</div>
                      </td>
                      <td className="text-center">
                        <img src={'img/flags/Poland.png'} alt="Poland" style={{height: 24 + 'px'}}/>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>43%</strong>
                          </div>
                          <div className="float-left">
                            <small className="text-muted">Warsaw Old Town</small>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <i className="fa fa-building" style={{fontSize: 24 + 'px'}}></i>
                      </td>
                      <td>
                        <div className="small text-muted">January</div>
                        <strong>Yesterday</strong>
                      </td>
                    </tr>
                    </tbody>
                  </Table>
                    </TabPane>
                    <TabPane tabId="2">
                        <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                        <thead className="thead-light">
                        <tr>
                          <th className="text-center"><i className="icon-people"></i></th>
                          <th>Tour Name</th>
                          <th className="text-center">Country</th>
                          <th>City</th>
                          <th className="text-center">Type</th>
                          <th>Date</th>
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
                            <div>Biking NYC with Cannondale</div>
                          </td>
                          <td className="text-center">
                            <img src={'img/flags/USA.png'} alt="USA" style={{height: 24 + 'px'}}/>
                          </td>
                          <td>
                            <div className="clearfix">
                              <div className="float-left">
                                <strong>New York City</strong>
                              </div>
                          <br/>
                              <div className="float-left">
                                <small className="text-muted">Mid-town Manhattan</small>
                              </div>
                            </div>
                          </td>
                          <td className="text-center">
                            <i className="fa fa-bicycle" style={{fontSize: 24 + 'px'}}></i>
                          </td>
                          <td>
                            <div className="small text-muted">July</div>
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
                            <div>Where's Tom Jobim hidden?</div>
                          </td>
                          <td className="text-center">
                            <img src={'img/flags/Brazil.png'} alt="Brazil" style={{height: 24 + 'px'}}/>
                          </td>
                          <td>
                            <div className="clearfix">
                              <div className="float-left">
                                <strong>Rio de Janeiro</strong>
                              </div>
                              <div className="float-left">
                                <small className="text-muted">Barra da Tijuca</small>
                              </div>
                            </div>
                          </td>
                          <td className="text-center">
                            <i className="fa fa-music" style={{fontSize: 24 + 'px'}}></i>
                          </td>
                          <td>
                            <div className="small text-muted">June</div>
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
                            <div>Himalayan Tour</div>
                          </td>
                          <td className="text-center">
                            <img src={'img/flags/India.png'} alt="India" style={{height: 24 + 'px'}}/>
                          </td>
                          <td>
                            <div className="clearfix">
                              <div className="float-left">
                                <strong>Nepal</strong>
                              </div>
                              <div className="float-left">
                                <small className="text-muted">Langtang National Park</small>
                              </div>
                            </div>
                          </td>
                          <td className="text-center">
                            <i className="fa fa-tree" style={{fontSize: 24 + 'px'}}></i>
                          </td>
                          <td>
                            <div className="small text-muted">April</div>
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
                            <div>From Arc de Triomphe to Eiffel Tower</div>
                          </td>
                          <td className="text-center">
                            <img src={'img/flags/France.png'} alt="France" style={{height: 24 + 'px'}}/>
                          </td>
                          <td>
                            <div className="clearfix">
                              <div className="float-left">
                                <strong>Paris</strong>
                              </div>
                              <div className="float-left">
                                <small className="text-muted">8th arrondissement of Paris</small>
                              </div>
                            </div>
                          </td>
                          <td className="text-center">
                            <i className="fa fa-road" style={{fontSize: 24 + 'px'}}></i>
                          </td>
                          <td>
                            <div className="small text-muted">April</div>
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
                            <div>Tour del Parque Maria Luisa</div>
                          </td>
                          <td className="text-center">
                            <img src={'img/flags/Spain.png'} alt="Spain" style={{height: 24 + 'px'}}/>
                          </td>
                          <td>
                            <div className="clearfix">
                              <div className="float-left">
                                <strong>Sevilla</strong>
                              </div>
                              <div className="float-left">
                                <small className="text-muted">San Bernardo</small>
                              </div>
                            </div>
                          </td>
                          <td className="text-center">
                            <i className="fa fa-tree" style={{fontSize: 24 + 'px'}}></i>
                          </td>
                          <td>
                            <div className="small text-muted">January</div>
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
                            <div>Meet Warsaw Royal Castle</div>
                          </td>
                          <td className="text-center">
                            <img src={'img/flags/Poland.png'} alt="Poland" style={{height: 24 + 'px'}}/>
                          </td>
                          <td>
                            <div className="clearfix">
                              <div className="float-left">
                                <strong>43%</strong>
                              </div>
                              <div className="float-left">
                                <small className="text-muted">Warsaw Old Town</small>
                              </div>
                            </div>
                          </td>
                          <td className="text-center">
                            <i className="fa fa-building" style={{fontSize: 24 + 'px'}}></i>
                          </td>
                          <td>
                            <div className="small text-muted">January</div>
                            <strong>Yesterday</strong>
                          </td>
                        </tr>
                        </tbody>
                      </Table>
                    </TabPane>
                  </TabContent>
                </Col>
                </Row>
          </div>
        </div>


      </div>

    )
  }
}

export default myProfile;
