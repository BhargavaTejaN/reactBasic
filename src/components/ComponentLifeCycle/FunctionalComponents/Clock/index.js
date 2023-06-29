import React,{useState,useEffect} from 'react'

const Clock = () => {

  const [time,setTime] = useState(new Date());

  const tick = () => setTime(new Date());

  // this act's as both componentDidMount() and ComponentWillUnMount()
  // import useEffect Hook from react 
  useEffect(() => {
    const intervalId = setInterval(tick,1000);

   // componentWillUnMount() method
    return() => {
      clearInterval(intervalId)
    }

  },[])

  return (
    <div>
      <h3>{time.toLocaleTimeString()}</h3>
    </div>
  )
}

export default Clock