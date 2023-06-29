import React, { Component } from 'react'

class Clock extends Component {

  state = {
    time : new Date()
  }

  tick = () => {
    this.setState({
      time : new Date()
    })
  }

  componentDidMount(){
    this.intervalId = setInterval(this.tick,1000)
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  render() {
    const {time} = this.state

    return (
      <div>
        <h3>{time.toLocaleTimeString()}</h3>
      </div>
    )
  }
}

export default Clock