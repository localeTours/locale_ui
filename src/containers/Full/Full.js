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
import firebase from '../../fire';


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
        // if(this.props.signedIn || localStorage.signedIn) {
        //     if(!this.props.signedIn) {
        //         firebase.auth().onAuthStateChanged((user)=> {
        //             self.props.signIn(user)
        //         })
        //     }
        // }
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
                                    <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                                    <Route path="/components/buttons" name="Buttons" component={Buttons}/>
                                    <Route path="/components/cards" name="Cards" component={Cards}/>
                                    <Route path="/components/forms" name="Forms" component={Forms}/>
                                    <Route path="/components/modals" name="Modals" component={Modals}/>
                                    <Route path="/components/social-buttons" name="Social Buttons" component={SocialButtons}/>
                                    <Route path="/components/switches" name="Swithces" component={Switches}/>
                                    <Route path="/components/tables" name="Tables" component={Tables}/>
                                    <Route path="/components/tabs" name="Tabs" component={Tabs}/>
                                    <Route path="/icons/font-awesome" name="Font Awesome" component={FontAwesome}/>
                                    <Route path="/icons/simple-line-icons" name="Simple Line Icons" component={SimpleLineIcons}/>
                                    <Route path="/widgets" name="Widgets" component={Widgets}/>
                                    <Route path="/charts" name="Charts" component={Charts}/>
                                    <Route path="/test" name="Charts" component={Charts}/>
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

export default Full;
