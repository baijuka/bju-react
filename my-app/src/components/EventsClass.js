import React, { Component } from 'react'

export class EventsClass extends Component {
  handleClick () {
    console.log('You clicked class component');
  }
  render() {
    return (
      <div><button onClick={this.handleClick}>click me - class component</button></div>
    )
  }
}

export default EventsClass