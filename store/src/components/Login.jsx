import React, { Component } from 'react';

class login extends Component {
  render() {
    const loginItems = this.state.post.map( login =>(
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

export default login;