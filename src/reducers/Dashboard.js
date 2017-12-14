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

    // userDb.add({
    //   name: "Some User",
    //   email: "some@mail.com",
    //   created_tours: [
    //     "12",
    //     "1"
    //   ],
    //   attending_tours: [
    //       {
    //           tour: 123445566,
    //           checkpointsCompleted: [
    //             123,
    //             456
    //           ],
    //           isCompleted: false
    //       }
    //   ]
    // }).then((doc) => {
    //   console.log(doc);
    // }).catch((err) => {
    //   console.log(err);
    // });
    // Gets all Data
    // tourDb.get().then((docs) => {
    //   docs.forEach((doc) => {
    //     console.log(doc.data());
    //   });
    // }).catch((err) => {
    //   console.log(err)
    // })

    // Get Specific Data. Can use math operators like less than, greater than, equal to, etc
    // tourDb.where("name", "==", "yo").get().then((docs) => {
    //   docs.forEach((doc) => {
    //     console.log(doc.data());
    //   });
    // }).catch((err) => {
    //   console.log(err)
    // })
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
