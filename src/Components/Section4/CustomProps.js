export default function CustomProps({ as: Tag = 'div', children }) {
  return (
    <Tag>{children}</Tag>
  )
}
// it uses div if we not mention the html tag in app component