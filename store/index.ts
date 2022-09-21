import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: 'AIzaSyAFQmt1YLkutpeDhvYpEcwsfobSMZCePBg',
  authDomain: 'shop-ercomerce.firebaseapp.com',
  projectId: 'shop-ercomerce',
  storageBucket: 'shop-ercomerce.appspot.com',
  messagingSenderId: '847292398023',
  appId: '1:847292398023:web:8095721e56952eb0c781e2',
  measurementId: 'G-K2H18E661S',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export default database;
