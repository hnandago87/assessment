import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Assessment from './Assessment.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/assessment' render={()=>(
          <Assessment />
        )}
         /> 
      </div>
    );
  }
}

export default App;
