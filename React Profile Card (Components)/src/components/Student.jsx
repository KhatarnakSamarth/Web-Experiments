import React from 'react'

function Student(props) {
  return (
    <div className='student-card'>
      <h2>{props.name}</h2>
      <p>Course: {props.course}</p>
      <p>Marks: {props.marks}</p>
    </div>
  )
}

export default Student
