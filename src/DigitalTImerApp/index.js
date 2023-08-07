import React,{useState,useRef} from 'react'
import './index.css'

const DigitalTimerApp = () => {

    const [isTimerRunning,setIsTimerRunning] = useState(false);
    const [seconds,setSeconds] = useState(0);
    const [minutes,setMinutes] = useState(25);

    const intervelRef = useRef(null);


    const getElapsedSecondsInTimeFormat = () => {
        const totalRemainingSeconds = minutes * 60 - seconds;
        const Minutes = Math.floor(totalRemainingSeconds / 60); 
        const Seconds = Math.floor(totalRemainingSeconds % 60); // remainder

        const stringifiedMinutes = Minutes > 9 ? Minutes : `0${Minutes}`;
        const stringifiedSeconds = Seconds > 9 ? Seconds : `0${Seconds}`;

        return `${stringifiedMinutes}:${stringifiedSeconds}`
    }

    const clearTimerInterval = () => clearInterval(intervelRef.current);

    const tick = () => {

        const isTimerCompleted = seconds === minutes * 60

        if(isTimerCompleted){
            clearTimerInterval();
            setIsTimerRunning(!isTimerRunning);
        } else {
            setSeconds((prevState) => prevState+1);
        }
    }

    const StartOrPauseTimer = () => {

        const isTimerCompleted = seconds ===  minutes * 60;

        if(isTimerCompleted){
            setSeconds(0);
        }

        if(isTimerRunning){
            clearTimerInterval()
        } else {
            intervelRef.current = setInterval(tick,1000);
        }
        setIsTimerRunning(!isTimerRunning);
    }
    const ResetTimer = () => {
        clearTimerInterval();
        setSeconds(0);
        setMinutes(25);
        setIsTimerRunning(false);
    }

    const renderTimerController = () => {
        const startOrPauseImageUrl = isTimerRunning
        ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
      const startOrPauseAltText = isTimerRunning ? 'pause icon' : 'play icon'
  
      return (
        <div className="timer-controller-container">
          <button
            className="timer-controller-btn"
            onClick={StartOrPauseTimer}
            type="button"
          >
            <img
              alt={startOrPauseAltText}
              className="timer-controller-icon"
              src={startOrPauseImageUrl}
            />
            <p className="timer-controller-label">
              {isTimerRunning ? 'Pause' : 'Start'}
            </p>
          </button>
          <button
            className="timer-controller-btn"
            onClick={ResetTimer}
            type="button"
          >
            <img
              alt="reset icon"
              className="timer-controller-icon"
              src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
            />
            <p className="timer-controller-label">Reset</p>
          </button>
        </div>
      )
    }

    const IncreaseMinutes = () => {
        setMinutes(minutes + 1);
    }
    const DecreaseMinutes = () => {
        setMinutes(minutes - 1);
    }

    const renderTimerLimitController = () => {

        const isButtonsDisabled = seconds > 0

        return (
            <div className="timer-limit-controller-container">
              <p className="limit-label">Set Timer limit</p>
              <div className="timer-limit-controller">
                <button
                  className="limit-controller-button"
                  disabled={isButtonsDisabled}
                  onClick={DecreaseMinutes}
                  type="button"
                >
                  -
                </button>
                <div className="limit-label-and-value-container">
                  <p className="limit-value">{minutes}</p>
                </div>
                <button
                  className="limit-controller-button"
                  disabled={isButtonsDisabled}
                  onClick={IncreaseMinutes}
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
          )
    }

    const labelText = isTimerRunning ? 'Running' : 'Paused'
    return (
        <div className="app-container">
          <h1 className="heading">Digital Timer</h1>
          <div className="digital-timer-container">
            <div className="timer-display-container">
              <div className="elapsed-time-container">
                <h1 className="elapsed-time">
                  {getElapsedSecondsInTimeFormat()}
                </h1>
                <p className="timer-state">{labelText}</p>
              </div>
            </div>
            <div className="controls-container">
              {renderTimerController()}
              {renderTimerLimitController()}
            </div>
          </div>
        </div>
    )
}

export default DigitalTimerApp