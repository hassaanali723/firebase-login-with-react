import React, { Component } from 'react';

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import { getElementError } from '@testing-library/react';

//var firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyAYLHGXLfwDgAv3wpkXCNcdUpT27ZcDsmc",
    authDomain: "signup-bf102.firebaseapp.com",
    databaseURL: "https://signup-bf102-default-rtdb.firebaseio.com",
    projectId: "signup-bf102",
    storageBucket: "signup-bf102.appspot.com",
    messagingSenderId: "139960247379",
    appId: "1:139960247379:web:32529e8726e2baa4fe92a6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


class Authen extends Component {

    login(event){

        const email = this.refs.email.value;
        const pass = this.refs.password.value;

        console.log(email,pass);

        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email,pass);
        
        promise.then( user => {
            var lout = document.getElementById('logout');
            lout.classList.remove('hide');
            var err = 'Welcome ' + user.user.email;
            this.setState({err:err})
    


        });
        
        promise.catch( e=> {
            var err = e.message;
            console.log(err);
            this.setState({err: err})
        }

        )

    }

    signup(){

        
        const email = this.refs.email.value;
        const pass = this.refs.password.value;

        console.log(email,pass);

        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email,pass);

        promise
        .then(user => {
            console.log(user);
            var err = 'Welcome ' + user.user.email;
            console.log(err);
            console.log(user.user.uid);
            firebase.database().ref('users/'+user.user.uid).set({
                email:user.user.email
            });
            console.log(user);
            this.setState({err:err})
        });

        promise
        .catch(e => {
            var err = e.message;
            console.log(err);
            this.setState({err: err})
        });

    }

    logout(){
        firebase.auth().signOut();
        var lout = document.getElementById('logout');
            lout.classList.add('hide');
            var err = 'Thank for using our app ';
            this.setState({err:err})

    }

    google(){
        var provider = new firebase.auth.GoogleAuthProvider();
        var promise = firebase.auth().signInWithPopup(provider);

        promise
        .then(result => {
            var user = result.user;
            var msg = "Welcome "+ user.displayName;
            this.setState({
                err: msg
            })
            
            console.log(user);
            firebase.database().ref('users/'+user.uid).set({
                email:user.email,
                name: user.displayName
            })
        })

        
        promise.catch(e => {

            var err = e.message;
            console.log(err);
            this.setState({err: err})

        })

    }


    constructor(props) {
        super(props);
        this.state = { 
            err: ''
         }

        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.logout = this.logout.bind(this);
        this.google = this.google.bind(this);

    }
    render() { 
        return ( 
            <div className="main">
            <input className="input" id="email" ref="email" type="email" placeholder="Enter your email" /> <br/>
            <input className="input" id="pass" ref="password" type="password" placeholder="Enter your password" /> <br/>
            <p>{this.state.err}</p>
            <button className="btn" onClick={this.login}>Login</button>
            <button className="btn" onClick={this.signup}>Signup</button>
            <button id="logout" className="hide btn" onClick={this.logout}>Logout</button><br/>
            <button className="google" onClick={this.google}>Sign In with Google</button>


                 
           </div>
         );
    }
}
 
export default Authen;