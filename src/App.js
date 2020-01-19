import React, { useState, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'

import GithubState from './context/github/GithubState'

import './App.css'

const App = () => {
  const [alert, setAlert] = useState(null)

  //text is being passed back via searchusers sent from Search like emit in vue

  // Clear users from state

  //set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => {
      setAlert(null)
    }, 5000)
  }

  return (
    <GithubState>
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
                    <Search setAlert={showAlert} />
                    <Users></Users>
                  </Fragment>
                )}
              ></Route>
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/user/:login' component={User}></Route>
              <Route exact path='/advance' component={About}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  )
}

export default App
