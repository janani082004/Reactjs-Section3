import { useState } from "react";
function State() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click for the increment</button >
    </>
  )
}
export default State;