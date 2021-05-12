import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import  {fetchPost } from '../actions/PostAction'

class login extends Component {

  componentWillMount(){
    this.props.fetchPost();
  }
  render() {
    const loginItems = this.props.post.map( login =>(
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

login.propType = {
    fetchPost: PropTypes.func.isRequired,
    login: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  login: login.state.items,

});

export default connect (mapStateToProps, {fetchPost}) (post);