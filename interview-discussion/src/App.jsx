import { useState } from 'react'

import './App.css'

function App() {
  const [value, setValue] = useState(1)
  // const [multipliedValue, setMultipliedValue] = useState(1)
  let multipliedValue = value *5;

  const mutliplyby5 = () => {
    // setMultipliedValue(value * 5)
    setValue(value + 1)
  }  

  return (
    <>
      <h1>Main Value:{value}</h1>
      <button
        onClick={mutliplyby5}>Click to Multiply by 5</button>
      <h2>Multiplied Value: {multipliedValue}</h2>
    </>
  )
}

export default App
