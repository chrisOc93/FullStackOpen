const App = () => {
  
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
    ]
  }
 
 
  const Course = () =>{
    const Header = () => {
      return(
        <h1>{course.name}</h1>
      )}
      
      const Conetnt = () => {
        const total = course.parts.reduce((currentNum, nextNum) => currentNum + nextNum.exercises, 0);
      return(
        <div className='parts'>
        {course.parts.map(part => 
        <h2 key={part.id}>
        {part.name + ' ' + part.exercises}
        </h2>
        )}
          <div>
            <h1>Total {total}</h1>
          </div>
      </div>
      )}

  return(
    <div>
    <Header/>
    <Conetnt/>
     
      
    </div>
   
  )}
  const result = course.parts.map(note => note.id)
  console.log(result)
  return <Course course={course} />
}

export default App
