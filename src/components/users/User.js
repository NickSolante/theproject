//Component that stores and takes a single user
import React, { Fragment, useEffect, useContext } from 'react'
import Repos from '../repos/Repos'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'
import GithubContext from '../../context/github/githubContext'

const User = ({ match }) => {
  const githubContext = useContext(GithubContext)
  const { getUser, user, loading, getUserRepos, repos } = githubContext
  useEffect(() => {
    getUser(match.params.login)
    getUserRepos(match.params.login)
    //eslint-disable-next-line
  }, [])

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
    hireable,
    company,
    public_repos,
    public_gists
  } = user

  if (loading) return <Spinner></Spinner>

  return (
    <Fragment>
      <Link to='/theproject/' className='btn btn-light'>
        Back to Search
      </Link>
      Hireable: {''}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            alt=''
            className='round-img'
            style={{ width: '150px' }}
          ></img>
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            {' '}
            Visit github profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username : {login}</strong>
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Blog : {blog}</strong>
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company : {company}</strong>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'> Followers: {followers}</div>
        <div className='badge badge-primary'> Following: {following}</div>
        <div className='badge badge-primary'> Gists: {public_gists}</div>
        <div className='badge badge-primary'> Repos: {public_repos}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  )
}

export default User
