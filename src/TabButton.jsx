
function handleClick(event) {
  console.log('Button Clicked');
  console.log(event.type);
}
export default function TabButton({ children }) {
  return (
    <ul>
      <li>
        <button onClick={handleClick}>{children}</button>
      </li>
    </ul>
  )
}