// import image1 from './img/image1.jpg';
// const names = ["xxx", "yyy", "zzz"];


// export default function Message(props) {
export default function Message({ name, age, qualification }) {
  return (
    <>
      <h1>name:{name}</h1>
      <h2>Age:{age}</h2>
      <h3>Qualification:{qualification}</h3>
      {/* <h1>name:{props.name}</h1>
        <h2>Age:{props.age}</h2>
        <h3>Qualification:{props.qualification}</h3> */}
    </>
  );
}
