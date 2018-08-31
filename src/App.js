import React, { Component } from 'react';
import './App.css';
//import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from './actions';
import {decrement} from './actions';

class App extends Component {
  render() {
    return (
      
        <div className="container">
          <h1 className="jumbotro-heading text-center">{this.props.counter}</h1>
          <p className="text-center">
            <button onClick={()=>this.props.dispatch(increment())} className="btn btn-primary mr-2" >Increase</button>
            <button onClick={()=>this.props.dispatch(decrement())} className="btn btn-danger mr-2" >Decrease</button>
          </p>
        </div>
    
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.anotherReducer
  };
};

export default connect(mapStateToProps)(App);
