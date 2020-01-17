import React, { useState, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import axios from 'axios'
import Alert from './components/layout/Alert'
import About from './components/pages/About'

import './App.css'

const App = () => {
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)

  // useEffect(() => {
  //   setLoading(true)
  //   const res = axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   )

  //   setLoading(false)
  //   setUsers(res.data)
  // }, [])

  // async componentDidMount() {
  //   setLoading(true)
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   )

  //   setLoading(false)
  //   setUsers(res.data)

  // }

  // Get single github user
  const getUser = async username => {
    setLoading(true)
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    setLoading(false)
    setUser(res.data)
  }

  //getUserRepos
  const getUserRepos = async username => {
    setLoading(true)
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    setLoading(false)
    setRepos(res.data)
  }

  //text is being passed back via searchusers sent from Search like emit in vue
  const searchUsers = async text => {
    setLoading(true)
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    setLoading(false)
    setUsers(res.data.items)
  }
  // Clear users from state
  const clearUsers = () => {
    setLoading(false)
    setUsers([])
  }

  //set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => {
      setAlert(null)
    }, 5000)
  }

  return (
    <Router>
      <div className='App'>
        <Navbar title='Github finder'></Navbar>
        <div className='container'>
          <Alert alert={alert}></Alert>
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={showAlert}
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
                  getUserRepos={getUserRepos}
                  getUser={getUser}
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

export default App
