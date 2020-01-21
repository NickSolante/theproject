import React, { useReducer } from 'react'
import TimeContext from './timeContext'
import TimeReducer from './timeReducer'
import date from 'date-and-time'

import { SET_TIME } from '../types'

const TimeState = props => {
  const initialState = date.format(new Date(), 'DD-MM-YYYY HH:mm:ss')
  const [state, dispatch] = useReducer(TimeReducer, initialState)

  function setTime() {
    let now = date.format(new Date(), 'DD-MM-YYYY HH:mm:ss')
    dispatch({
      state: SET_TIME,
      payload: now
    })
    setTimeout(setTime(), 1000)
  }

  // const setAlert = (msg, type) => {
  //   dispatch({
  //     type: SET_ALERT,
  //     payload: { msg, type }
  //   })
  //   setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000)
  // }

  return (
    <TimeContext.Provider
      value={{
        time: state,
        setTime
      }}
    >
      {props.children}
    </TimeContext.Provider>
  )
}

export default TimeState
