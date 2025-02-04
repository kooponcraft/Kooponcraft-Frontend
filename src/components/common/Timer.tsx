

'use client'

import React from 'react';
import { useTimer } from 'react-timer-hook';

const Timer = () => {

  const expiryTimestamp = new Date('2025-12-30');
  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp });


  return (
    <>
      <div className="bid-ends" >
        <div><span className="days">{days}</span><span>Days</span></div>
        <div><span className="hours">{hours}</span><span>Hours</span></div>
        <div><span className="minutes">{minutes}</span><span>Min</span></div>
        <div><span className="seconds">{seconds}</span><span>Sec</span></div>
      </div>
    </>
  );
};

export default Timer;