//Component that stores and takes a single user
import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
  }
  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
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
      followers,
      hireable
    } = this.props.user
    const { loading } = this.props
    if (loading) return <Spinner></Spinner>
    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back to Search
        </Link>
        Hireable: {''}
        {hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger' />
        )}
      </Fragment>
    )
  }
}

User.propTypes = {}

export default User
