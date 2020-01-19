import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'

const Search = ({ showClear, setAlert }) => {
  const githubContext = useContext(GithubContext)
  const [text, setText] = useState('')

  const onChange = e => {
    setText(e.target.value)
    //using e.target name allows you to access multiple inputs without having to have different onchange functions
  }
  const { searchUsers, clearUsers, users } = githubContext

  const onSubmit = e => {
    e.preventDefault()
    if (text === '') {
      setAlert('Please enter something', 'light')
    } else {
      searchUsers(text)
      setText('')
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        ></input>
        <input
          type='submit'
          className='btn btn-dark btn-block'
          value='Search'
        ></input>
      </form>
      {users.length > 0 && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  )
}

Search.propType = {
  setAlert: PropTypes.func.isRequired
}

export default Search
