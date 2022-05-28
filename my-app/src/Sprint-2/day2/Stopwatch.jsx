import React from 'react'
import { useState } from 'react'

const Stopwatch = () => {
const [timerId ,setTimerId] = useState();
const [watch , setWatch] = useState(100);


function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }

const start = () =>{
    if(!timerId) {
        let id = setInterval (() => {
            setWatch((prev) => prev +100);
        },100);
        setTimerId(id)
          
      }
};
const pause = () =>{
    clearInterval(timerId);
     setTimerId(null);
};
const reset = () =>{
    clearInterval(timerId);
    setWatch(0);
};
  return (
    <div>
     <h2>StopWatch</h2>      
     <h1>{msToTime(watch)}</h1>
     <div>
         <button onClick={start}>Start</button>
         <button onClick={pause}>Pause</button>
         <button onClick={reset}>Reset</button>
     </div>
    </div>
  )
}

export default Stopwatch
