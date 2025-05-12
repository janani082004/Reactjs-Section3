export default function DefaultProps({ names = "janani", age = 20 }) {
  return (
    <>
      <h1>{names}</h1>
      <h1>{age}</h1>
    </>
  )
}
//if I give    <DefaultProps names="xxx" /> then the outpur is : XXX 20 ; if i didn't given mean then  the output is : janani 20