import image1 from './img/image1.jpg';
const names = ["xxx", "yyy", "zzz"];


export default function Info() {
  return (
    <>
      {
        names.map((name) => (
          <h1 key={name}><img src={image1} alt='img' style={{ width: "40px" }} draggable="false" />Hello {name}</h1>
        ))
      }
    </>
  )
}