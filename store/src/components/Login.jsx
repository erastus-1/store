import React, { Component } from 'react'

class login extends Component {
   constructor(props){
     super(props)
     this.state = {
      login : []
     }
   }


  componentWillMount(){
    fetch('https://storemanagerapi2.herokuapp.com/api/v2/products')
    .then(res => res.json())
    .then(data => this.setState({login:data}));
  }
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