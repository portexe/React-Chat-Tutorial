import React from 'react';
import LoginComponent from './Login/login';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';
const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects

class AppContainer extends React.Component {

  componentWillMount() {
    this.checkForSavedAuth();
  }

  // constructor() {
  //   super();
  //   firebase.initializeApp({
  //     apiKey: "AIzaSyAlWBvbvLv7dT6_RYnlCeZbOcotpeBU3Y8",
  //     authDomain: "im-app-tutorial.firebaseapp.com",
  //     databaseURL: "https://im-app-tutorial.firebaseio.com",
  //     projectId: "im-app-tutorial",
  //     storageBucket: "im-app-tutorial.appspot.com",
  //     messagingSenderId: "199544684635",
  //     appId: "1:199544684635:web:fb388e2c181f0476"
  //   });
  //   this.db = firebase.firestore();
  //   this.state = {
  //     user: null
  //   };
  // }

  render() {
    if(this.state.user)
      return <DashboardComponent user={this.state.user}></DashboardComponent>
    else
      return <SignupComponent loginFn={this.loggedIn}></SignupComponent>
  }

  checkForSavedAuth = () => {
    console.log(firebase.auth().currentUser);
  };

  loggedIn = (user) => this.setState({ user: user });

}

export default AppContainer;