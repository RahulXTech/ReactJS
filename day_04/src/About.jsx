import React from 'react'

function About(props) {
  console.log(props.email)
  console.log(props.address)
  console.log(props.college.subject)
  return (
    <div>
      <h1>Hello props</h1>
      <h2> {props.abc}</h2>
      <h3>{props.address}</h3>
      <h5>{props.college.subject}</h5>
    </div>
  )
}

export default About

