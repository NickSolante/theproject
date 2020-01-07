import React, { Component } from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'

const Users = ({ users, loading }) => {
  const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
  }
  if (!loading) {
    return (
      <div style={userStyle}>
        {this.props.users.map(user => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </div>
    )
  } else {
    return <Spinner></Spinner>
  }
}

export default Users
