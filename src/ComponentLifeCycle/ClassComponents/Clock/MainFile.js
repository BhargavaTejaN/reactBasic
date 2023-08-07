import React, { Component } from 'react'
import Clock from './index'

class MainFile extends Component {

  state = {
    showClock : true
  }

  render() {
    const {showClock} = this.state

    const toogleClock = () => {
      this.setState((prevstate) => {
        const {showClock} = prevstate
        return {
          showClock : !showClock
        }
      })
    }

    return (
      <div>
        <h1>MainFile</h1>
        {showClock && <Clock />}
        <br />
        <button onClick={toogleClock} type='button'>
          {showClock? "Hide clock" : 'Show clock'}
        </button>
      </div>
    )
  }
}

export default MainFile