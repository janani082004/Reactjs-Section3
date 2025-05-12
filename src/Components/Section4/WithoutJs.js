import React from "react"
export default function WithoutJs() {
  return React.createElement('div', {},
    React.createElement('h1', { id: 'sampleH1' }, "Hello how are you?"),
    React.createElement('p', {}, "sample text without using JSX..")
  )
}