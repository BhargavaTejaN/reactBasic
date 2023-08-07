// functional components -> rafce 
// class components -> rce 

import React from 'react'

class CounterClassComponent extends React.Component {

  state = {
    count : 0,
    name : "Click The Button"
  }

  render() {
    const {count,name} = this.state 

    const handleDecrease = () => {
      this.setState((prevState) => ({
        count : prevState.count - 1
      }))
    }

    const handleReset = () => {
      this.setState({
        count : 0
      })
    }

    const handleIncrease = () => {
      this.setState((prevState) => ({
        count : prevState.count + 1
      }))
    }

    const handleName = () => {
      this.setState({
        name : "Hello This Is React"
      })
    }

    return (
      <div>
        Count: {count}
        <br />
        <button type="button" onClick={handleDecrease}>Decrease</button>
        <button type="button" onClick={handleReset}>Reset</button>
        <button type="button" onClick={handleIncrease}>Increase</button>
        <br />
        <p>Name : {name}</p>
        <button type="button" onClick={handleName}>Set Name</button>
      </div>
    )
  }
}

export default CounterClassComponent