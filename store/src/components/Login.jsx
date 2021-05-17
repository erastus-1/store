import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  {fetchPost } from '../actions/PostAction'

class login extends Component {

  componentWillMount(){
    this.props.fetchPost();
  }
  render() {
    const loginItems = this.props.login.map( login =>(
      <div key= {login.id}>
      </div>
    ));
    return (
      <div>
        <h1>Login</h1>
        <h3>{loginItems}</h3>
      </div>
    )
  }
}

login.propTypes = {
    fetchPost: PropTypes.func.isRequired,
    login: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  login: login.state.items,

});

export default connect (mapStateToProps, {fetchPost}) (login);