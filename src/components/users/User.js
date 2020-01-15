//Component that stores and takes a single user
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      following,
      followers
    } = this.props.user
    const { loading } = this.props
    return <div>{name}</div>
  }
}

User.propTypes = {}

export default User
