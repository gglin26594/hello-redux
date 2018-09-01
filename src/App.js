import React, { Component } from "react";
import "./App.css";
//import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { increment } from "./actions";
import { increment1 } from "./actions";
import { decrement } from "./actions";

class App extends Component {
  render() {
    const { increment } = this.props;
    const { increment1 } = this.props;
    const { decrement } = this.props;
    console.dir(increment);
    console.dir(this.props);
    return (
      <div className="container">
        <h1 className="jumbotro-heading text-center">{this.props.counter}</h1>
        <p className="text-center">
          <button onClick={() => increment1(2)} className="btn btn-primary mr-2">
            Increase
          </button>
          <button onClick={() => decrement()} className="btn btn-danger mr-2">
            Decrease
          </button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};


// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => {dispatch(increment())}
//   }
// }

export default connect(
  mapStateToProps,
  { increment, decrement,increment1 }
)(App);
