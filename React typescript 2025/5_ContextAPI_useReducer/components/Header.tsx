// import { useContext } from 'react';
import Button from './UI/Button.tsx';
import {/*TimersContext,*/ useTimersContext } from '../store/timers-context.tsx'

export default function Header() {
  const timersCtx = useTimersContext();
  //  const timersCtx= useContext(TimersContext)!;

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button
       onClick={timersCtx.isRunning ? timersCtx.stopTimers : timersCtx.startTimers}>
        {timersCtx.isRunning ? 'Stop' : 'Start'} Timers</Button>
    </header>
  );
}
