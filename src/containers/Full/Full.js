"use strict"

import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';
import Dashboard from '../../views/Dashboard/';
import Charts from '../../views/Charts/';
import Widgets from '../../views/Widgets/';
import Profile from '../../frontend/views/Profile';
import Explore from '../../frontend/components/explore';
import myProfile from '../../frontend/components/myProfile';
import UserRegister from '../../components/UserRegister/UserRegister';
import AboutMe from '../../components/AboutMe/AboutMe';
import firebase from '../../fire';


import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { signIn } from '../../frontend/actions';





// Icons

import CreateTour from "../../frontend/components/createTour";
import CreateCheckpointList from '../../frontend/components/createCheckpointList';
import CreateCheckpoint from '../../frontend/components/createCheckpoint';
import TourDetailComponent from "../../frontend/components/tourDetail";

class Full extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false
    }
  }

    componentWillMount(){
        var self = this;
        if(this.props.isSignedIn || localStorage.signedIn) {
            if(!this.props.isSignedIn) {
                firebase.auth().onAuthStateChanged((user)=> {
                    self.props.signIn(user)
                    this.setState({
                        user: user
                    });
                })
            }
        }
    }


    render() {
        var signedIn = localStorage.signedIn ==="true" ? true : false;

        if(signedIn){
            return (
                <div className="app">
                    <Header />
                    <div className="app-body">
                        <Sidebar {...this.props}/>
                        <main className="main">
                            <Breadcrumb />
                            <Container fluid>
                                <Switch>
                                    <Route path="/completeprof/:id" name="CompleteProfile" component={UserRegister}/>
                                    <Route path="/aboutme/:id" name="AboutMe" component={AboutMe}/>
                                    <Route path="/user/:id" name="Profile"   component={Profile}/>
                                    <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                                    <Route path="/explore" name="explore" component={Explore}/>
                                    <Route path="/myProfile" name="myProfile" component={myProfile}/>

                                    <Route path="/explore" name="explore" component={Explore}/>
                                    <Route path="/createTour" name="Create Tour" component={CreateTour} />
                                    <Route exact path="/tour/checkpoints" name="Create Route" component={CreateCheckpointList} />
                                    <Route exact path="/tour/checkpoints/create/:index" name="Create Checkpoint" component={CreateCheckpoint} />
                                    <Route exact path="/tour/:tour" name="Tour" component={TourDetailComponent} />
                                    <Redirect from="/" to="/dashboard"/>
                                </Switch>
                            </Container>
                        </main>
                        <Aside />
                    </div>
                    <Footer />
                </div>
            );

        } else {
            return (
                <Redirect to='/login' />

            )
        }

  }
}



const mapStateToProps = (state) => {
    return({
        isSignedIn: state.account.isSignedIn,
        user: state.account.user
    })
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        signIn: signIn
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Full));
