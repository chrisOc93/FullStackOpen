import React from 'react';


const App = () => {
  const Header = (props) => {

    return (
        <h1>{props.course}</h1>
    )
  }

  const Content = () => {

    return (
        <h3>Part 1 - {part1} - Exercise - {exercise1} <br/>
        Part 2 - {part2} - Exercise - {exercise2}<br/>
        Part 3 - {part3} - Exercise - {exercise3}</h3>
    )
}

  const Total = () => {
    return (
      <p>Total: {10+7+14}</p> 
    )
  }



  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React '
  const exercise1 = 10
  const part2 = 'Using props to pass data, '
  const exercise2 = 7
  const part3 = 'State of the component'
  const exercise3 = 14 

  return (
    <div>
      <Header course ={course}/>
      <Content/>
      <Total />
      
    </div>
   

  )


}
export default App;
