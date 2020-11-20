import firebase from 'firebase'
import firebaseConfig from './FirebaseConfig'
import config from './FirebaseConfig'

firebase.initializeApp(config);

export default firebase