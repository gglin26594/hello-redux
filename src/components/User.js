import React, { Component } from "react";
import {getUser} from "../actions"

//import PropTypes from 'prop-types'
import { connect } from "react-redux";

class User extends Component {
  render() {
    const {getUser, user} = this.props;
    
    return (
      <div className="container">
        <h1 className="jumbotro-heading text-center">{user.email}</h1>
        <p className="text-center">
          <button onClick={()=>getUser()} className="btn btn-success">Get Random User</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, {getUser})(User);
