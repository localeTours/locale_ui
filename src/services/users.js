

function createUser(firebase){
  //Finding Current User
  let user = firebase.auth().currentUser;
  //Getting all users
  let userExists = firebase.database().ref()
          .child('users');

  //Looping through all users here
  userExists.once('value', snap =>{
    console.log(snap.val())
  //retrieving all of the uid's of users
    let uid = Object.keys(snap.val());
    //Does the list of users in firebase have the currect user logged in?
    let currentUserCreated = uid.indexOf(user.uid)
    if (currentUserCreated === -1){
      firebase.database().ref().child('users')
          .child(firebase.auth().currentUser.uid)
          .set({
        name: user.displayName,
        email: user.email
      })
    }
  });
  console.log('we did it!')
}


module.exports={
  createUser: createUser
}
