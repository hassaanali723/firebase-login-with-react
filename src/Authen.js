import React, { Component } from 'react';

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

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

        // handling login prmomise
        promise.catch( e=> {
            var err = e.message;
            console.log(err);
            this.setState({err: err})
        }

        )

    }
    constructor(props) {
        super(props);
        this.state = { 
            err: ''
         }

        this.login = this.login.bind(this)
    }
    render() { 
        return ( 
            <div className="App">
            <input id="email" ref="email" type="email" placeholder="Enter your email" /> <br/>
            <input id="pass" ref="password" type="password" placeholder="Enter your password" /> <br/>
            <p>{this.state.err}</p>
            <button onClick={this.login}>Login</button>
            <button>Signup</button>
            <button>Logout</button>


                 
           </div>
         );
    }
}
 
export default Authen;