import React,{useState} from 'react'
import Clock from './index'

const MainPage = () => {

  const [showclock,setShowClock] = useState(true);

  const toogleClock = () => {
    setShowClock(!showclock)
  }

  return (
    <div>
      <h1>MainPage</h1>
      {showclock && <Clock />}
      <br />
      <button type="button" onClick={toogleClock}>
        {showclock? "Hide clock" : "Show clock"}
      </button>
    </div>
  )
}

export default MainPage