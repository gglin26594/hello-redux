import React, { Component } from "react";
import {getUser} from "../actions"

//import PropTypes from 'prop-types'
import { connect } from "react-redux";

class User extends Component {
  render() {
    const {getUser, user, error, isFetching} = this.props;
    let data;
    if(error) {
      data = error;
    } else if (isFetching) {
      data = "Loading..."
    } else {
      data = user.email;
    }
    return (
      <div className="container">
        <h1 className="jumbotro-heading text-center">{data}</h1>
        <p className="text-center">
          <button onClick={()=>getUser()} className="btn btn-success">Get Random User</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state)=> {
  console.log(state);
  
  return {
    user: state.user,
    error: state.error,
    isFetching: state.isFetching
  };
}

export default connect(mapStateToProps, {getUser})(User);
