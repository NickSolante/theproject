import React, { Component } from 'react'

export class Search extends Component {
  state = {
    text: ''
  }
  render() {
    return (
      <div>
        <form className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
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
