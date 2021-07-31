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
     <h1>
       Welcome
     </h1>
     <Authen/>
    </div>
     );
  }
}
 
export default App;
