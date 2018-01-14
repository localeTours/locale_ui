import firebase from 'firebase';

  // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBr4qKMbQ49PxFMuerb-c0kw8unmmS5o7c",
        authDomain: "testproject-945f4.firebaseapp.com",
        databaseURL: "https://testproject-945f4.firebaseio.com",
        projectId: "testproject-945f4",
        storageBucket: "testproject-945f4.appspot.com",
        messagingSenderId: "914949600545"
    };
  firebase.initializeApp(config);

export default firebase;
