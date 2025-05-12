export default function Intersecting({ inputValue, setInputValue }) {
  return (
    <>
      <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
    </>
  )
}