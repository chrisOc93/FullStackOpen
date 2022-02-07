import React, { useState } from 'react'

const Buttons = () => {
    // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [rating, setRating] = useState(0)
  const [total, setTotal] = useState(0)

// adding + 1 to each state 
  const goodClick = () => {
    setGood(good + 1)
    setRating(rating + 1)
    setTotal(total + 1)
  }
  const badClick = () => {
    setBad(bad + 1)
    setRating(rating - 1)
    setTotal(total + 1)
  }
  const neutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  // makes percents out of the states
  const goodPrecent = (good / total * 100).toFixed(0);
  const badPrecent = (bad / total * 100).toFixed(0);
  const neutralPrecent = (neutral / total * 100).toFixed(0);

// Hide/Show stats 
  const StatsDisplay = () => {
    if (total === 0) {
      return (
        <div>
          No feedback given - Please rate to see stats 


        </div>
      )
    }
    return (
      <div>
       
    
      <h1>Current Vibe: {rating}</h1>
      <h2>Positive: {good} out of {total} - {goodPrecent}%</h2>
      <h2>Negative: {bad} out of {total} - {badPrecent}%</h2>
      <h2>Neutral: {neutral} out of {total} - {neutralPrecent}%</h2>
      <h2>Total: {total}</h2>
      </div>
      
    )
  }

 
  
    return (
        <div>

        <button onClick = {goodClick} >Good Button </button> 
        <button onClick={neutralClick}>Neutral Button </button> 
        <button onClick={badClick}>Bad Button </button>
        

        <StatsDisplay/>
        </div>
       
    )
}


export default Buttons