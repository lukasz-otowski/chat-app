import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCBE2vGduV9dJct_CqSF9MNBR4DBfPz8_g",
    authDomain: "brain-chat-39fec.firebaseapp.com",
    databaseURL: "https://brain-chat-39fec.firebaseio.com",
    projectId: "brain-chat-39fec",
    storageBucket: "brain-chat-39fec.appspot.com",
    messagingSenderId: "620519114410"
};
firebase.initializeApp(config);
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots: true})

export default firebaseApp.firestore()