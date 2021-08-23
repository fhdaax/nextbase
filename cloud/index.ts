import { firebaseConfig } from 'config/firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/performance';
import 'firebase/compat/analytics';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
