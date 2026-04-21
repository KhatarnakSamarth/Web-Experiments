import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Counter Application</h1>
      <div id='counter'>{count}</div>
      <button className="btn" onClick={() => { setCount(prevcount => prevcount + 1) }}>Increment (+)</button>
      <button className="btn" onClick={() => { setCount(prevcount => prevcount - 1) }}>Decrement (-)</button>
      <button className="btn" onClick={() => { setCount(0) }}>Reset</button>
    </>
  )
}

export default App
