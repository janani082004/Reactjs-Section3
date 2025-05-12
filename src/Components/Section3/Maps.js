const fruits = ['Apple', 'orange', 'grapes', 'banana']
export default function Maps() {
  return (
    <>
      {
        fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))
      }
    </>
  )
}