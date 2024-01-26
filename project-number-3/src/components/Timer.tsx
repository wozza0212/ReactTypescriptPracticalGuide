import Container from './UI/Container.tsx';
import {useTimersContext, type Timer as TimerProps } from '../store/timers-context.tsx';
import { useEffect, useRef, useState } from 'react';

// type TimerProps = {
//   name: string;
//   duration: number;
// }

const Timer = ({name, duration}: TimerProps) => {
  const interval = useRef<number | null>(null)
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const {isRunning} = useTimersContext()

  if(remainingTime <= 0 && interval.current) {
    console.log('stopping timer')
    clearInterval(interval.current)
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 50)
    }, 50)
    interval.current = timer

  // }else if(interval.current) {
  //   clearInterval(interval.current)
  // }
    return () => clearInterval(timer)
  }, [])

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2)
  
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p><progress max={duration * 1000} value={remainingTime}/></p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}

export default Timer
