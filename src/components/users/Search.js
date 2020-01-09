import React, { Component } from 'react'

class Search extends Component {
  state = {
    text: ''
  }
  onChange = e => {
    //using e.target name allows you to access multiple inputs without having to have different onchange functions
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.searchUsers(this.state.text)
    this.setState({ text: '' })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          ></input>
          <input
            type='submit'
            className='btn btn-dark btn-block'
            value='Search'
          ></input>
        </form>
      </div>
    )
  }
}

export default Search
