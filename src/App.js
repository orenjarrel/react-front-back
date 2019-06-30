import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import axios from 'axios'


class App extends Component {  // changing from function() to class
  // async componentDidMount() {
  //   axios.get('https://api.github.com/users')
  //     .then(res => console.log(res.data))
  // }

  // ^^ same thing!

  state = {
    users: [],
    loading: false
  }
  async componentDidMount() {
    this.setState({ loading: true })

    const res = await axios.get('https://api.github.com/users');

    this.setState({ users: res.data, loading: false })
  }

  render() {  // can't RETURN directly fro a class; needs a method: "render"
    return (
      <div className="App">
        <Navbar 
          title="Github Finder" 
          icon='fab fa-github'
        />
        <div className="container">
          <Users 
            loading={this.state.loading}
            users={this.state.users}
          />
        </div>     
      </div>
    );
  }
}

export default App;
