import React from 'react'

function Employee(props) {

   return (
      <div>{props.id} {props.name} {props.designation} {props.salary}</div>
   
    )
  }

  export default Employee