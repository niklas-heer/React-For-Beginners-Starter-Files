import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyArF6IIPYEge3QBNZCDrKddLyOAPy9bMfk",
  authDomain: "catch-of-the-day-niklas-heer.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-niklas-heer.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
