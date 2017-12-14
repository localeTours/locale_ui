import React, { Component } from 'react';
import fire from "../fire";
import { tourDb, auth, userDb } from "../services/db";
import CreateTour from "./createTour";

class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: null,
      tourName: "",
      tourDescription: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitToDb = this.submitToDb.bind(this);
  }

  handleChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]: value
    });
  }

  submitToDb(e){
    e.preventDefault();
    // Adds to DB with auto generated ID
    tourDb.add({
      name: this.state.tourName,
      description: this.state.tourDescription
    }).then(function(doc){
      console.log(doc);
    }).catch(function(err){
      console.log(err);
    })
  }

  componentDidMount(){
    auth.onAuthStateChanged((user) => {
      if(user){
        this.setState({
          user
        });
      }
    });
  }

  render() {
    return (
      <div id="dashboard">
        <p>This is the dashboard</p>
        {
          this.state.user ? 
          <CreateTour user={this.state.user.uid}/>
          :
          <p>You are not logged in</p>
        }
      </div>
    )
  }
}

export default Dashboard
