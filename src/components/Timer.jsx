import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [inputTime, setInputTime] = useState(0);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (time === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  const handleStart = () => {
    setTime(inputTime * 60); // convert minutes to seconds
    setIsRunning(true);
  };

  const handleChange = (e) => {
    setInputTime(e.target.value);
  };

  return (
    <div className="fixed bottom-10 right-10 p-4 bg-black text-white rounded-lg z-50">
      <div className="flex flex-col items-center text-white">
        <input
          type="number"
          value={inputTime}
          onChange={handleChange}
          className="mb-2 p-1 text-white"
          placeholder="Set time in minutes"
        />
        <button
          onClick={handleStart}
          className="mb-2 p-1 bg-blue-500 rounded"
        >
          Start
        </button>
        <div>
          Time Remaining: {Math.floor(time / 60)}:
          {time % 60 < 10 ? `0${time % 60}` : time % 60}
        </div>
      </div>
    </div>
  );
};

export default Timer;
