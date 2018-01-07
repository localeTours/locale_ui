import React, { Component } from 'react';
import './App.css';
import fire from './fire';
import Login from './login';
import Signout from './signout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: []}; // <- set up react state
  }
  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    // let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    let messagesRef = fire.database().ref('users');

    let usersRef = fire.database().ref('users/aarontest').push().set({
      name: 'Phil',
    username: 'name',
    email:'email'
    });
    messagesRef.on('child_added', snapshot => {

      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val().name };
      this.setState({ messages: [message].concat(this.state.messages) });
    })


  }
  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire.database().ref('users').push( this.inputEl.value );
    this.inputEl.value = ''; // <- clear the input
  }


  render() {


    return (
      <div>
        <form onSubmit={this.addMessage.bind(this)}>
          <input type="text" ref={ el => this.inputEl = el }/>
          <input type="submit"/>
          <ul>
            { /* Render the list of messages */
              this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
            }
          </ul>
        </form>

        <Login/>
        <Signout/>
        {this.state.user ? this.state.user : <h1>NOpe</h1> }
      </div>
    );
  }
}

export default App;
