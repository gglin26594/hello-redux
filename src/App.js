import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'

class App extends Component {
  render() {
    return (
      
        <div className="container">
          <h1 className="jumbotro-heading text-center">{this.props.value}</h1>
          <p className="text-center">
            <button className="btn btn-primary mr-2" onClick={this.props.onClick}>Increase</button>
            <button className="btn btn-danger mr-2" onClick={this.props.onClickDe}>Decrease</button>
          </p>
        </div>
    
    );
  }
}

App.propType = {
  value: PropTypes.number 
}

export default App;
