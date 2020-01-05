import React, { Component } from 'react'
import Navbar from './components/navbar/Navbar'
import Users from './components/users/Users'
import './App.css'

class App extends Component {
  componentDidMount() {
    console.log(1234)
  }
  render() {
    return (
      <div className='App'>
        <Navbar title='Github finder'></Navbar>
        <div className='container'>
          <Users></Users>
        </div>
      </div>
    )
  }
}

export default App
