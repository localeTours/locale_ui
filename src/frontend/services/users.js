
import { userDb } from "./db";
import firebase from "../../fire";

export function createUser(result){
  return new Promise((resolve, reject) => {
    // Queries the user db and looks for a specific doc using the users Firebase UID
    // Then returns if the user exists or has been addded
    userDb.doc(result.user.uid).get().then((user) => {
      if(user.exists == true){
        resolve(user);
      } else {
        userDb.doc(result.user.uid).set({
          username: result.user.displayName,
          email: result.user.email,
          accessToken: result.credential.accessToken
        }).then((res) => {
          resolve("added");
        }).catch((err) => {
          reject(err);
        });
      }
    }).catch((err) => {
      reject(err);
    })
  });
}

export function createUserWithEmail(result, username){
  return new Promise((resolve, reject) => {
    // Queries the user db and looks for a specific doc using the users Firebase UID
    // Then returns if the user exists or has been addded
    userDb.doc(result.uid).get().then((user) => {
      if(user.exists == true){
        resolve(user);
      } else {
        userDb.doc(result.uid).set({
          email: result.email,
          username: username
        }).then((res) => {
          resolve("added");
        }).catch((err) => {
          reject(err);
        });
      }
    }).catch((err) => {
      reject(err);
    })
  });
}


export function createUserWithEmailAndPassword(state){

    let self = state;
    const email = state.state.email;
    const pass = state.state.pass;
    const username = state.state.fullName;
    firebase.auth().createUserWithEmailAndPassword(email, pass).then(function(user) {
        //console.log(user);
        createUserWithEmail(user, username).then((resp) => {
            self.props.signIn(user);
            localStorage.userName = username;
            localStorage.uid = user.uid;
            localStorage.signedIn = true;
            self.setState({
                loggedIn: true
            });
            console.log(self.state);
        }).catch((err) => {
            console.log(err);
        })
    }).then(function(){
        var user = firebase.auth().currentUser;
        var actionCodeSettings = {
            url: 'http://localhost:8080/completeprof/' + firebase.auth().currentUser.iud
        };

        user.sendEmailVerification().then(function() {
            //email sent
        }).catch(function(error) {
            console.log(error);
        });
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var emailE = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(errorCode + ' ' + errorMessage + ' ' + emailE + ' ' + credential);
    });

}

export function signInWithPopup(state){
    var self = state;

    return new Promise((resolve, reject) => {
        firebase.auth().signInWithPopup(provider).then(function (user) {

            createUser(user).then((resp) => {
                self.props.signIn(user);
                localStorage.userName = user.displayName;
                localStorage.uid = user.user.uid;
                localStorage.signedIn = true;
                self.setState({
                    loggedIn: true
                });
                console.log(self.state);
            }).catch((err) => {
                console.log(err);
            })
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    });
}

export function checkLoggedIn(state){
    var self = state;
    return new Promise((resolve, reject) => {
        if (state.props.signedIn || localStorage.signedIn) {
            if (!state.props.signedIn) {
                firebase.auth().onAuthStateChanged((user) => {
                    self.props.signIn(user)
                    console.log(user);
                    return resolve(user)
                })
            }
        }
    });
}


