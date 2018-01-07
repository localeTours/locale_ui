import firebase from 'firebase';

  // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAf0MXQUaoblcKcy7B9zdkGfZmJsr1SqlY",
        authDomain: "locale-dev.firebaseapp.com",
        databaseURL: "https://locale-dev.firebaseio.com",
        projectId: "locale-dev",
        storageBucket: "locale-dev.appspot.com",
        messagingSenderId: "31609653821"
    };
  firebase.initializeApp(config);

export default firebase;
