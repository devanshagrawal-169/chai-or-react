import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
let myObj = {
  username: "devansh",
  email: "dev@gmail.com"
}

let myArr = [1,2,2,2,3]
  return (
    <>
    <h1 className="bg-red-500 p-4 text-black">Tailwind Test</h1>
    <Card username = "chaiorcode" btnText = "click me" />
    <Card username = "devansh" btnText = "click me once"/>
      
    </>
  )
}

export default App
