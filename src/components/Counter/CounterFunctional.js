// using Hooks 

import React,{useState} from 'react'

const CounterFunctional = () => {

    const [count,setCount] = useState(0);
    const [name,setName] = useState("");

    const handleDecrease = () => {
        setCount(count - 1)
    }

    const handleReset = () => setCount(0);

    const handleIncrease = () => setCount(count + 1)

    const handleName = () => setName("Hello This Is React")

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

export default CounterFunctional