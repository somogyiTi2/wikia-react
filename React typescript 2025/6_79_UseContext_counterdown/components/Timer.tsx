import Container from './UI/Container.tsx';
import { useTimersContext, type Timer as TimerProps } from '../store/timers-context.tsx';
import { useEffect, useRef, useState } from 'react';

export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null);
  const [remainginTime, setReaminingTime] = useState(duration * 1000);
  const { isRunning } = useTimersContext()

  if (remainginTime <= 0 && interval.current) {
    clearInterval(interval.current)
  }

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(
        function () {
          setReaminingTime((prevTime) => {
            if (prevTime <= 0) {
              return prevTime;
            }
            return prevTime - 50;
          });
        }, 50);
      interval.current = timer;
    } else if (interval.current) {
      clearInterval(interval.current)
    }

    return () => clearInterval(timer);
  }, [isRunning]);


  const formattedRemainingTime = (remainginTime / 10000).toFixed(2);

  return (
    <Container as="article">
      hello
      <h2>{name}</h2>
      <p><progress max={duration * 1000} value={remainginTime} /></p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
