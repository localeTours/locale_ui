

// function createUser(firebase){
//   //Finding Current User
//   let user = firebase.auth().currentUser;
//   //Getting all users
//   let userExists = firebase.database().ref()
//           .child('users');

//   //Looping through all users here
//   userExists.once('value', snap =>{
//     console.log(snap.val())
//   //retrieving all of the uid's of users
//     let uid = Object.keys(snap.val());
//     //Does the list of users in firebase have the currect user logged in?
//     let currentUserCreated = uid.indexOf(user.uid)
//     if (currentUserCreated === -1){
//       firebase.database().ref().child('users')
//           .child(firebase.auth().currentUser.uid)
//           .set({
//         name: user.displayName,
//         email: user.email
//       })
//     }
//   });
//   console.log('we did it!')
// }


// module.exports={
//   createUser: createUser
// }

import { userDb } from "./db";

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
