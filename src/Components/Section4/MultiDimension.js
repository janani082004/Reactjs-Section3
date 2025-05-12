export default function MultiDimension() {
  const arr = [[1, 2], [3, 4]]
  return (
    <>
      {
        arr.map((row, i) => (
          <div key={i}>
            {
              row.map((item, j) => (
                <span key={j}> {item}</span>
              ))}
          </div>
        ))
      }
    </>
  )
}