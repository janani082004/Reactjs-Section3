import { useState } from "react"

export default function TwowayBinding() {
  const [name, setName] = useState("")
  return (
    <>
      <form onSubmit={(e) => (e.preventDefault())}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button disabled={!name}>Submit</button>
        <p>Hello {name}</p>
      </form>
    </>
  )
}