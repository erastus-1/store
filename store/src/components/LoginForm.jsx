import React, { Component } from 'react'

class LoginForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});   
  }
  onSubmit (e) {
    e.preventDefault();

    const Login = {
      email: this.state.email,
      password: this.state.password
    }
    fetch('https://storemanagerapi2.herokuapp.com/api/v2/auth/login', {
      method: 'post',
      headers: {
         'content_type': 'application/json'
      },
      body: JSON.stringify(Login)
    })
    .then( res=> res.json())
    .then( data => console.log(data));
  }


  render() {
    return (
      <div className="container">
        <h1>LoginForm</h1>
        <form onSubmit= {this.onSubmit}>
          <div>
          <label> Email:</label> <br/>
          <input type="text" name="email"  onChange= {this.onChange} value= {this.state.email} />
          </div>
          <br />
          <div>
          <label> Password:</label> <br/>
          <input type="text" name="password" onChange= {this.onChange} value= {this.state.password}/>
          </div>
          <br />
          <button type="submit"> Login</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;