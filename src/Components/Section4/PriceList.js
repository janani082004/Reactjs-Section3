export default function PriceList() {
  const items = [
    { name: 'Pen', price: 10 },
    { name: 'Book', price: 50 },
    { name: 'Pencil', price: 5 },
  ];

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <h1 >🛒 Item List</h1>
      <ul >
        {items.map((item, i) => (
          <li key={i}>{item.name} - ₹{item.price}</li>
        ))}
      </ul>
      <p >Total: ₹{total}</p>
    </>
  );
}
