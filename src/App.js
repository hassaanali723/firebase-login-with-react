import React, { Component } from 'react';
import './App.css';
import Authen from './Authen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="App">
        <div className="card">
     <h1>
       Signup/Login
     </h1>
     <Authen/>
     </div>
    </div>
     );
  }
}
 
export default App;
