import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import AssessmentStart from './AssessmentStart';
import Register from './Register.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="jumbotron">
            <h2>Learn and test your knowledge</h2> 
        </header>
        <Route exact path='/assessment' render={()=>(
          <AssessmentStart />
        )}
         /> 
         <Route exact path='/register' render={()=>(
          <Register />
        )}
         /> 
      </div>
    );
  }
}

export default App;
