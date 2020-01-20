import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import axios from 'axios'
import Alert from './components/layout/Alert'
import About from './components/pages/About'

import './App.css'

class App extends Component {
  state = {
    user: [], //stores single users
    users: [], //stores all the users taken from search
    repos: [],
    loading: false,
    alert: null
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )

    console.log(res.data)
    this.setState({ users: res.data, loading: false })
  }

  // Get single github user
  getUser = async username => {
    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )

    this.setState({ user: res.data, loading: false })
  }

  //getUserRepos
  getUserRepos = async username => {
    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )

    this.setState({ repos: res.data, loading: false })
  }

  //text is being passed back via searchusers sent from Search like emit in vue
  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )

    this.setState({ users: res.data.items, loading: false })
  }
  // Clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false })
  }

  //set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } })
    setTimeout(() => {
      this.setState({ alert: null })
    }, 5000)
  }

  render() {
    const { users, loading, repos, user } = this.state
    return (
      <Router>
        <div className='App'>
          <Navbar title='Github finder'></Navbar>
          <div className='container'>
            <Alert alert={this.state.alert}></Alert>
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users}></Users>
                  </Fragment>
                )}
              ></Route>
              <Route exact path='/about' component={About}></Route>
              <Route
                exact
                path='/user/:login'
                render={props => (
                  <User
                    {...props}
                    getUserRepos={this.getUserRepos}
                    getUser={this.getUser}
                    user={user}
                    repos={repos}
                    loading={loading}
                  ></User>
                )}
              ></Route>
              <Route exact path='/advance' component={About}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
