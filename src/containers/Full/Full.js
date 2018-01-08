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
import firebase from '../../fire';


import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { signIn } from '../../frontend/actions';


//Components


// Components
import Buttons from '../../views/Components/Buttons/';
import Cards from '../../views/Components/Cards/';
import Forms from '../../views/Components/Forms/';
import Modals from '../../views/Components/Modals/';
import SocialButtons from '../../views/Components/SocialButtons/';
import Switches from '../../views/Components/Switches/';
import Tables from '../../views/Components/Tables/';
import Tabs from '../../views/Components/Tabs/';

// Icons
import FontAwesome from '../../views/Icons/FontAwesome/';
import SimpleLineIcons from '../../views/Icons/SimpleLineIcons/';

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
                    var action = {user}
                    self.props.signIn(action)
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
                                    <Route path="/user/:id" name="Profile" component={Profile}/>
                                    <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                                    <Route path="/explore" name="explore" component={Explore}/>
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

