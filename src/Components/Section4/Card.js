export default function Card({ header, children, footer }) {
  return (
    <>
      <div className="header">{header}</div>
      <div className="child">{children}</div>
      <div className="footer">{footer}</div>
    </>
  )
}