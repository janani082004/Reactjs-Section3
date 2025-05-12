import React, { useState } from 'react';
import CounterButton from './CounterButton';
import CounterDisplay from './CounterDisplay';
export default function CounterApp() {
  const [count, setCount] = useState(1);
  return (
    <React.Fragment>
      <CounterDisplay count={count} />
      <CounterButton onClick={() => setCount(prev => ({ ...prev, count: prev.count + 1 }))} />
    </React.Fragment>
  )
}