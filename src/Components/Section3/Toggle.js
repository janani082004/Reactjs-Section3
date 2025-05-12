import { useState } from 'react';
export default function Toggle() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={isDark ? 'dark' : 'light'}>
      <p>This is {isDark ? "Dark" : "Light"} Mode</p>
      <button onClick={() => setIsDark(!isDark)}>Toggle Mode</button>
    </div>
  )
}