import './App.css';
import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const Likes = () => {
    if (mostVotes === 0)
    return (
      <h1>No Votes yet </h1>
    )
    return(
      <p>{winningAnecdote} with {votes[selected]} votes</p>
      
    )
  }

  function randomItem () {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
   console.log(selected)
    
  }

  const voteForAnecdote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    console.log(copy[selected])
  }; 

    // gets the highest value from votes 
  const mostVotes = Math.max(...votes);
  // uses most votes to set the index of what to display 
  const winningAnecdote = anecdotes[votes.indexOf(mostVotes)];

  return (
    <div>
      <h1>Random Anecdote</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={voteForAnecdote}>Likes</button>
      <button onClick={randomItem}>Next Anecdotes</button>
     <Likes/>
      
    </div>
  )
}

export default App
