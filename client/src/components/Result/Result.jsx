import React from 'react'

const Result = () => {
  return (
    <div>
    <p>{caffeineIntake === 0 
    ? "No caffeine consumed today." 
    : `Total caffeine intake today: ${caffeineIntake} mg`}</p>
    </div>
  )
}

export default Result
