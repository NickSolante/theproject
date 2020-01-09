import React, { Component } from 'react'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import axios from 'axios'
import './App.css'

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )

    console.log(res.data)
    this.setState({ users: res.data, loading: false })
  }

  //text is being passed back via searchusers sent from Search like emit in vue
  searchUsers = text => {
    console.log(text)
  }
  render() {
    return (
      <div className='App'>
        <Navbar title='Github finder'></Navbar>
        <div className='container'>
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users}></Users>
        </div>
      </div>
    )
  }
}

export default App
