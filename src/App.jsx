import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const hour = Math.floor(time / 3600);
  const minute = Math.floor(time / 60) % 60;
  const second = Math.floor(time % 60);
  console.log(minute, ":", second)

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every second
      intervalId = setInterval(() => setTime((time)=>time + 1), 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>
        Time: {hour > 0 && `${hour}:`}
        {minute}:{second < 10 ? `0${second}` : second}
      </p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
}

export default App;
