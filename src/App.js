import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      
        <div className="container">
          <h1 className="jumbotro-heading text-center">1</h1>
          <p className="text-center">
            <button className="btn btn-primary mr-2">Increase</button>
            <button className="btn btn-danger mr-2">Decrease</button>
          </p>
        </div>
     
    );
  }
}

export default App;
