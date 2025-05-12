import { useState } from "react";

function Rendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {isLoggedIn ? <p>hello..you are successfuly logged in</p> : <p>404:something happended</p>}
      <button onClick={() => { setIsLoggedIn(!isLoggedIn) }}>Click To Toggle</button>
    </>
  )
}
export default Rendering;