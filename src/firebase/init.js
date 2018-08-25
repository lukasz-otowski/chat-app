import firebase from 'firebase'
import firestore from 'firebase/firestore'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA2qGi1_pozXK4YvLwf5B9xfLZReTMY4gk",
    authDomain: "brain-chat-3431f.firebaseapp.com",
    databaseURL: "https://brain-chat-3431f.firebaseio.com",
    projectId: "brain-chat-3431f",
    storageBucket: "brain-chat-3431f.appspot.com",
    messagingSenderId: "519551101488"
  };

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots: true})

export default firebaseApp.firestore()