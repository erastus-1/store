import React, { Component } from 'react';
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

const mapStateToProps = state => ({
  logged: logged.state.items,

});

export default connect (null, {fetchPost}) (post);