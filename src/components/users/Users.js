import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
  state = {
    users: [
      {
        login: 'dink',
        id: 1,
        node_id: 'MDQ6VXNlcjE=',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/mojombo',
        html_url: 'https://github.com/mojombo'
      },
      {
        login: 'mojombo',
        id: 2,
        node_id: 'MDQ6VXNlcjE=',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/mojombo',
        html_url: 'https://github.com/mojombo'
      },
      {
        login: 'manf',
        id: 3,
        node_id: 'MDQ6VXNlcjE=',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/mojombo',
        html_url: 'https://github.com/mojombo'
      }
    ]
  }
  render() {
    const userStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: '1rem'
    }
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </div>
    )
  }
}

export default Users
