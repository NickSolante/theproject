import React, { useContext } from 'react'
import TimeContext from '../../context/time/timeContext'

const Greeting = () => {
  const timeContext = useContext(TimeContext)
  const { time } = timeContext

  return (
    time !== null && (
      <div>
        <p>{time.now}</p>
      </div>
    )
  )
}

export default Greeting
