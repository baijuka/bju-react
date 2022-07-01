import React from 'react'

function EventsFunctional() {
    function handleClick() {
        console.log('You have clicked functional component');
    }
  return (
    <div><button onClick={handleClick}>click me - fucntional component</button></div>
  )
}

export default EventsFunctional